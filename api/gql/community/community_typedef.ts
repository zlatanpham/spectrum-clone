
import { gql } from 'apollo-server'

export default gql`
  type Community {
    id: ID!
    name: String
    slug: String
    description: String
    coverPhoto: String
    avatarPhoto: String
    isPublic: Boolean
  }

  type Query {
    communities(page: Int, pageSize: Int): [Community]!
    community(id: ID!): [Community]!
  }

  input ICommunityForm {
    name: String!
    slug: String
    description: String
    coverPhoto: String
    avatarPhoto: String
    isPublic: Boolean!
  }

  type Mutation {
    createCommunity(input: ICommunityForm!): Community!
  }
`