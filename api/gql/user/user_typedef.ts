
import { gql } from 'apollo-server'

export default gql`
  type User {
    id: ID!
    name: String
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser: User!
  }
`