import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';

import schema from './gql';
import cfg, { corsOpts } from './cfg';
import seedInitialData from './seed';
import authRoutes from './routes/auth';
import cors from 'cors';
import { setupPassport } from './authentication';
import { getUser } from './utils/helpers';

mongoose.connect(cfg.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection
  .once('open', async () => {
    try {
      const app = express();
      app.use(cors(corsOpts));
      app.use(cookieParser());
      app.use(passport.initialize());
      setupPassport();

      app.use('/', authRoutes);

      await seedInitialData();

      const server = new ApolloServer({
        schema,
        context: async ({
          req: {
            cookies: { token },
          },
        }) => ({
          user: await getUser(token),
        }),
      });

      server.applyMiddleware({ app, cors: false });

      app.listen({ port: cfg.PORT }, () =>
        console.log(
          `🚀 Server ready at http://localhost:${cfg.PORT}${server.graphqlPath}`,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  })
  .on('error', console.error.bind(console, 'connection error:'));
