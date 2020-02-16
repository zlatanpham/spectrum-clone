import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { IChannel } from './channel-model';

export interface IChannelMember extends Document {
  createdAt: Date;
  updatedAt: Date;
  user: IUser | string;
  channel: IChannel | string;
}

const ChannelMemberSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  channel: { type: Schema.Types.ObjectId, required: true, ref: 'Channel' },
  role: { type: String, enum: ['moderator', 'member'], default: 'member' },
  status: { type: String, enum: ['pending', 'approved', 'blocked'], default: 'pending' }
}, { timestamps: true });


export default mongoose.model<IChannelMember>('ChannelMember', ChannelMemberSchema, 'channelMembers');
