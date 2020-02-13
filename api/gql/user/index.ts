import { makeExecutableSchema } from "apollo-server";
import user_typedef from "./user_typedef";
import user_resolver from "./user_resolver";

const userSchema = makeExecutableSchema({ typeDefs: user_typedef, resolvers: user_resolver })
export default userSchema