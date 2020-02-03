import typeDefs from '../gql/typedefs';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

const runQuery = (query: string, variables = {}, ctx = {}) => {
  const schema = makeExecutableSchema({ typeDefs });
  return graphql(schema, query, null, { ...ctx }, variables);
};

export default runQuery;
