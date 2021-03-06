import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { IChannel } from './channel-model';

export interface IPost extends Document {
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  allowDiscussion: boolean;
  isPinned: boolean;
  author: IUser | string;
  channel: IChannel | string;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true, minlength: 3 },
  content: { type: String, required: true, minlength: 3 },
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  channel: { type: Schema.Types.ObjectId, required: true, ref: 'Channel' },
  isPinned: { type: Boolean, default: false },
  allowDiscussion: { type: Boolean, default: true },
}, { timestamps: true });

PostSchema.index({ title: 'text' })

export default mongoose.model<IPost>('Post', PostSchema, 'posts');
