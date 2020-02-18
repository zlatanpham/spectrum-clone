import { IChannel } from "../../models/channel-model"
import { getChannelMembers, getChannelID, createChannel, ChannelForm } from "../../usecases/channel"
import { Pagination, GQLContext } from "../../types"
import { getPostsByChannelID } from "../../usecases/post"

export default {
  Query: {
    async channel(_: object, { id }: { id: string }, ctx: GQLContext) {
      return getChannelID(id, ctx.user?.id)
    },
  },

  Mutation: {
    async createChannel(_: object, { input }: { input: ChannelForm }, ctx: GQLContext) {
      return createChannel(input, ctx.user?.id)
    }
  },

  Channel: {
    id(c: IChannel) {
      return c._id
    },
    async members(c: IChannel, { pagination }: { pagination: Pagination }) {
      return await getChannelMembers(c._id, pagination)
    },
    async posts(c: IChannel, { search, pagination }: { search?: string; pagination?: Pagination }) {
      return await getPostsByChannelID(c._id, search, pagination)
    }
  }
}