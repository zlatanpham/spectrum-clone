import jwt from 'jsonwebtoken';

import cfg from '../cfg';
import { UserReq } from '../types';
import userModel from '../models/user-model';

export const getUser = async (token?: string) => {
  if (!token) {
    return null;
  }

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, cfg.JWT_SECRET) as UserReq;

    const user = await userModel.findById(decoded.id);
    return user;
  } catch (ex) {}

  return null;
};
