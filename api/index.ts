import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './gql/schema'
import resolvers from './gql/resolvers'
const PORT = 4000;

const app = express();

const server = new ApolloServer({ schema, resolvers });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)