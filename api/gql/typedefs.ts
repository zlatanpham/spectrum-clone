import merge from 'lodash/merge'
// import { gql, mergeSchemas, makeExecutableSchema } from 'apollo-server'


import userTypedef from './user/user_typedef'

export default merge(userTypedef)