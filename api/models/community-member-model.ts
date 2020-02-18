import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { ICommunity } from './community-model';

export interface ICommunityMember extends Document {
  createdAt: Date;
  updatedAt: Date;
  user: IUser | string;
  community: ICommunity | string;
  role: string;
  status: string;
}

const CommunityMemberSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  community: { type: Schema.Types.ObjectId, required: true, ref: 'Community' },
  role: { type: String, enum: ['owner', 'moderator', 'member'], default: 'member' },
  status: { type: String, enum: ['pending', 'approved', 'blocked'], default: 'pending' }
}, { timestamps: true });


export default mongoose.model<ICommunityMember>('CommunityMember', CommunityMemberSchema, 'communityMembers');
