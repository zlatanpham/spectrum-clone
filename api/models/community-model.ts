import nanoid from 'nanoid';
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';

export interface ICommunity extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  isPublic: boolean;
  owner: IUser;
  // members: Array<IUser>;
}

const CommunitySchema: Schema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12)
  },
  slug: { type: String, required: true, unique: true, },
  name: { type: String, required: true, minlength: 3 },
  isPublic: { type: Boolean, default: true },
  owner: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: true });


CommunitySchema.statics.getMembers = async function (): Promise<Array<IUser>> {
  return []
}

export default mongoose.model<ICommunity>('Community', CommunitySchema);
