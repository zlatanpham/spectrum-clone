// import { mergeResolvers } from 'graphql-toolkit'
import merge from 'lodash/merge'
import userResolver from './user/user_resolver'


export default merge(userResolver)