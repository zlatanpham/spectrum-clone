import { mergeResolvers } from 'graphql-toolkit'
import userResolver from './user/user_resolver'


export default mergeResolvers(
  [userResolver]
)