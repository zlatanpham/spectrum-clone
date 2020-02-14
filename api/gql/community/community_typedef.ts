
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

  input PaginationFilter {
    page: Int
    pageSize: Int
  }

  type Query {
    communities(search: String, pagination: PaginationFilter): [Community]!
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