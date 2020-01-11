import nanoid from 'nanoid';
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: String;
  name: string;
}

const UserSchema: Schema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12)
  },
  name: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);


// meothod getFriends...
// get channels
// get posts