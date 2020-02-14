import { GQLContext, Pagination } from "../../types"
import { ICommunity } from "../../models/community-model"
import {
  getCommunities,
  createCommunity,
  getCommunity,
  updateCommunity
} from "../../usecases/community"

interface CommunityFilter {
  pagingation: Pagination;
  search: string;
}

export default {
  Query: {
    async communities(_: object, f: CommunityFilter, ctx: GQLContext) {
      try {
        const comms = await getCommunities(f.search, ctx.user?._id, f.pagingation)
        return comms
      } catch (err) {
        throw err
      }
    },
    async community(_: object, { id }: { id: string }, ctx: GQLContext) {
      try {
        const comm = await getCommunity(id, ctx.user?._id)
        return comm
      } catch (err) {
        throw err
      }
    }
  },
  Mutation: {
    // @ts-ignore
    async createCommunity(_: object, { input }: object, ctx: GQLContext) {
      return await createCommunity(input, ctx.user?._id)
    },
    // @ts-ignore
    async updateCommunity(_: object, { id, input }: object, ctx: GQLContext) {
      return await updateCommunity(id, input, ctx.user?._id)
    }
  },

  Community: {
    id(c: ICommunity) {
      return c._id
    },
    members() {
      return []
    }
  }
}