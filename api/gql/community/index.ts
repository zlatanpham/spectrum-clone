import { makeExecutableSchema } from "apollo-server";
import community_typedef from "./community_typedef";
import community_resolver from "./community_resolver";

const communitySchema = makeExecutableSchema({ typeDefs: community_typedef, resolvers: community_resolver })
export default communitySchema