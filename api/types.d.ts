import { IUser } from './models/user-model';
import { Request } from 'express';

export interface GQLContext {
  user?: IUser;
}

export interface Pagination {
  page: number;
  pageSize: number;
}

export interface IRequest extends Request {
  //TODO: should be able to use IUser
  user?: any;
}

export type UserReq = {
  id: string;
};
