import { makeExecutableSchema } from 'apollo-server';
import merge from 'lodash/merge';
import typeDefs from './typedefs';
import userResolver from './resolvers/user';
import communityResolver from './resolvers/community';
import postResolver from './resolvers/post';
import messageResolver from './resolvers/message';
import channelResolver from './resolvers/channel';
import { AuthDirective } from './directives';

export default makeExecutableSchema({
  typeDefs,
  resolvers: merge(
    userResolver,
    communityResolver,
    postResolver,
    messageResolver,
    channelResolver,
  ),
  schemaDirectives: {
    auth: AuthDirective,
  },
});
