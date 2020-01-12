export default {
  Query: {
    users: async (_: object, __: object, ctx: object) => {
      try {
        // @ts-ignore
        const users = await ctx.models.UserModel.find()
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