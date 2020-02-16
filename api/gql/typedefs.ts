
import { gql } from 'apollo-server'

export default gql`
  type User {
    id: ID!
    name: String
    email: String!
    avatarImg: String
  }

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

  type Channel {
    id: ID!
    name: String!
    slug: String!
    isPublic: Boolean
    description: String
    coverPhoto: String
    avatarPhoto: String
    posts(search: String, pagination: PaginationFilter): [Post!]
    members(pagination: PaginationFilter): [User!]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    allowDiscussion: Boolean
    isPinned: Boolean
    author: User!
    messages(pagination: PaginationFilter): [Message!]
    reactionCount: Int!
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
    # Users
    users: [User]!

    # Communities
    community(id: ID!): Community!
    communities(search: String, pagination: PaginationFilter): [Community]!

    # Channels
    channel(id: ID!): Channel!

    # Post
    post(id: ID!): Post!
    posts(channelID: ID!, search: String, pagination: PaginationFilter): [Post!]
  }


  type Mutation {
    # Users
    createUser: User!

    # Communities
    createCommunity(input: ICommunityForm!): Community!
    updateCommunity(id: ID!, input: ICommunityForm!): Community!

    # Channels
    createChannel(input: IChannelForm): Channel!

    # Posts
    createPost(input: IPostForm!): Post!
    updatePost(input: IPostForm!): Post!
    archivePost(pid: ID!): Post!

    # Message
    createMessage(input: IMessageForm!): Message!
    deleteMessage(mid: ID!): Message!
  }

  # input for mutations
  input ICommunityForm {
    name: String!
    slug: String
    description: String
    coverPhoto: String
    avatarPhoto: String
    isPublic: Boolean!
  }

  input IChannelForm {
    community: ID!
    name: String!
    slug: String
    description: String
    coverPhoto: String
    avatarPhoto: String
    isPublic: Boolean!
  }

  input IPostForm {
    channel: ID!
    title: String!
    content: String!
    isPublic: Boolean
    allowDiscussion: Boolean
  }

  input IMessageForm {
    post: ID!
    content: String
    replyTo: ID
  }
`