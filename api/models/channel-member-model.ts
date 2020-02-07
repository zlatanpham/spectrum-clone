import nanoid from 'nanoid';
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { IChannel } from './channel-model';

export interface IChannelMember extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user: IUser;
  channel: IChannel;
}

const ChannelMemberSchema: Schema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12)
  },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  channel: { type: Schema.Types.ObjectId, required: true, ref: 'Channel' },
  role: { type: String, enum: ['moderator', 'member'], default: 'member' },
  status: { type: String, enum: ['pending', 'approved', 'blocked'], default: 'pending' }
}, { timestamps: true });


export default mongoose.model<IChannelMember>('ChannelMember', ChannelMemberSchema);
