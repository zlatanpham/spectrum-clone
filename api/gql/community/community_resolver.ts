import { getCommunities, createCommunity } from "../../usecases/community"
import { GQLContext, Pagination } from "../../types"
import { ICommunity } from "../../models/community-model"

export default {
  Query: {
    communities: async (_: object, p: Pagination, ctx: GQLContext) => {
      try {
        const comms = await getCommunities(ctx.user?._id, p)
        return comms
      } catch (err) {
        throw err
      }
    }
  },
  Mutation: {
    // @ts-ignore
    async createCommunity(_: object, { input }: object, ctx: GQLContext) {
      const com = await createCommunity(input, ctx.user?._id)
      return com;
    }
  },

  Community: {
    id: (c: ICommunity) => {
      return c._id
    }
  }
}