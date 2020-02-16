import { IPost } from "../../models/post-model"
import { getUserByID } from "../../usecases/user"
import { Pagination, GQLContext } from "../../types"
import { getPostByID, getPostsByChannelID, PostForm, createNewPost, updatePost } from "../../usecases/post"
import { getMessageByPostID } from "../../usecases/message"

export default {
  Query: {
    async post(_: object, { id }: { id: string }) {
      return getPostByID(id)
    },

    async posts(_: object, { channelID, search, pagination }: { channelID: string, search?: string, pagination?: Pagination }) {
      return getPostsByChannelID(channelID, search, pagination)
    }
  },

  Mutation: {
    async createPost(_: object, { input }: { input: PostForm }, ctx: GQLContext) {
      try {
        const post = await createNewPost({ ...input, author: ctx.user?._id })
        console.log(post)
        return post
      } catch (err) {
        throw err
      }
    },

    async updatePost(_: object, { pid, input }: { pid: string; input: PostForm }, ctx: GQLContext) {
      return updatePost(pid, { ...input, author: ctx.user?._id })
    },

    async archivePost(_: object, { pid }: { pid: string }) {
      return updatePost(pid, { allowDiscussion: false } as PostForm)
    },
  },

  Post: {
    id(p: IPost) {
      return p._id
    },
    async author(p: IPost) {
      return getUserByID(p.author as string)
    },

    async messages(p: IPost, { pagination }: { pagination: Pagination }) {
      return getMessageByPostID(p.id, pagination)
    }
  }
}