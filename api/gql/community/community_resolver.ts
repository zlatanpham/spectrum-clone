import { getCommunities, createCommunity } from "../../usecases/community"
import { GQLContext, Pagination } from "../../types"
import { ICommunity } from "../../models/community-model"

interface CommunityFilter {
  pagingation: Pagination;
  search: string;
}

export default {
  Query: {
    communities: async (_: object, f: CommunityFilter, ctx: GQLContext) => {
      try {
        const comms = await getCommunities(f.search, ctx.user?._id, f.pagingation)
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