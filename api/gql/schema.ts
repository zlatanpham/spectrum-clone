import { gql, mergeSchemas } from 'apollo-server'
import * as fs from 'fs'
import * as path from 'path'

import resolvers from './resolvers'
const userSchema = fs.readFileSync(path.join(__dirname, './user/user.gql'), 'utf8')

export default mergeSchemas({
  schemas: [gql(userSchema)],
  resolvers
})