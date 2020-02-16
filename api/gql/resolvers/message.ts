import { getUserByID } from "../../usecases/user"
import { GQLContext } from "../../types"
import { getMessageByID, MessageForm, createMessage, deleteMessage } from "../../usecases/message"
import { IMessage } from "../../models/message-model"

export default {
  Mutation: {
    async createMessage(_: object, { input }: { input: MessageForm }, ctx: GQLContext) {
      return createMessage({ ...input, author: ctx.user?._id })
    },
    async deleteMessage(_: object, { id }: { id: string }, ctx: GQLContext) {
      return deleteMessage(id, ctx.user?.id)
    }
  },

  Message: {
    id(m: IMessage) {
      return m._id
    },
    async author(m: IMessage) {
      return getUserByID(m.author as string)
    },

    async replyTo(m: IMessage) {
      return getMessageByID(m.replyTo as string)
    }
  }
}