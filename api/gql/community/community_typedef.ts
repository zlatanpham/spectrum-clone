
import { gql } from 'apollo-server'

export default gql`
  type Community {
    id: ID!
    name: String!
    slug: String!
    description: String
    coverPhoto: String
    avatarPhoto: String
    isPublic: Boolean
    members(pagination: PaginationFilter): [User!]
    channels: [Channel!]
  }

  # TODO: dup with user typedef???
  type User {
    id: ID!
    name: String
    email: String!
  }

  type Channel {
    id: ID!
    name: String!
    slug: String!
    isPublic: Boolean
    description: String
    coverPhoto: String
    avatarPhoto: String
    post: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    allowDiscussion: Boolean
    isPinned: Boolean
    author: User!
    messages: [Message!]
  }

  type Message {
    id: ID!
    createdAt: String
    updatedAt: String
    author: User!
    content: String!
    replyTo: Message
  }

  type Reaction {
    reaction: String
    author: User!
  }

  input PaginationFilter {
    page: Int
    pageSize: Int
  }

  type Query {
    communities(search: String, pagination: PaginationFilter): [Community]!
    community(id: ID!): Community!
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
    updateCommunity(id: ID!, input: ICommunityForm!): Community!
  }
`