import nanoid from 'nanoid';
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';

export interface ICommunity extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  description: string;
  coverPhoto: string;
  avatarPhoto: string;
  isPublic: boolean;
  status: string;
}

const CommunitySchema: Schema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12)
  },
  slug: { type: String, required: true, unique: true, },
  name: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true, minlength: 3 },
  coverPhoto: { type: String, minlength: 3 },
  avatarPhoto: { type: String, minlength: 3 },
  isPublic: { type: Boolean, default: true },
  status: { type: String, enum: ['active', 'archived'], default: 'active' }
}, { timestamps: true });


CommunitySchema.statics.getMembers = async function (): Promise<Array<IUser>> {
  return []
}

export default mongoose.model<ICommunity>('Community', CommunitySchema);
