import userModel, { IUser } from "../models/user-model";

export async function getUsers(): Promise<IUser[]> {
  return userModel.find({})
}