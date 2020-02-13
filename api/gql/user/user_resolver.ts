// @ts-nocheck
import { getUsers } from "../../usecases/user"

export default {
  Query: {
    users: async (_: object, __: object, ctx: object) => {
      try {
        const users = getUsers()
        return users
      } catch (err) {
        throw err
      }
    }
  },
  Mutation: {
    createUser: () => ({
      id: '1',
      name: 'beo'
    })
  }
}