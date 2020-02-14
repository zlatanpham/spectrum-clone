
import { gql } from 'apollo-server'

export default gql`
  type User {
    id: ID!
    name: String
    email: String!
  }

  type Query {
    users: [User]!
  }

  type Mutation {
    createUser: User!
  }
`