import { IUser } from "./models/user-model";

export interface GQLContext {
  user?: IUser;
}

export interface Pagination {
  page: number;
  pageSize: number;
}