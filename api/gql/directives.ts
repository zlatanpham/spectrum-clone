import {
  AuthenticationError,
  SchemaDirectiveVisitor,
} from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField } from 'graphql';

export class AuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function(...args) {
      const ctx = args[2];
      if (!ctx.user) {
        throw new AuthenticationError('Access denied. No token provided.');
      }

      const res = await resolve.apply(this, args);
      return res;
    };
  }
}
