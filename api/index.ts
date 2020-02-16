import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import schema from './gql'
import cfg from './cfg'
import seedInitialData from './seed';
import models from './models';

mongoose.set('debug', !cfg.IS_PRODUCTION);
mongoose.connect(cfg.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
mongoose.connection.once('open', async () => {
  try {
    await seedInitialData()
    const app = express();
    const server = new ApolloServer({
      schema,
      async context(/*{req, res}*/) {
        // FAKE authen ===> TODO implement authen and pass user object here
        const user = await models.User.findOne({ email: 'spectrum@clone.com' })
        return { user }
      }
    });
    server.applyMiddleware({ app });

    app.listen({ port: cfg.PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${cfg.PORT}${server.graphqlPath}`)
    )
  } catch (err) {
    console.error(err)
  }
}).on("error", console.error.bind(console, 'connection error:'))