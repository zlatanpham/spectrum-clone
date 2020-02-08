import userModel, { IUser } from '../models/user-model';

const errUserNotFound = new Error('User not found');

export async function getUsers(): Promise<IUser[]> {
  return userModel.find({});
}

export async function getUserByID(id: string): Promise<IUser> {
  try {
    const user = await userModel.findById(id);
    if (!user) {
      throw errUserNotFound;
    }
    return user;
  } catch (err) {
    throw err;
  }
}
