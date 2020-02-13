import { mergeSchemas } from "apollo-server";
import userSchema from "./user";
import communitySchema from "./community";

export default mergeSchemas({ schemas: [userSchema, communitySchema] })