import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { IPost } from './post-model';

export interface IMessage extends Document {
  createdAt: Date;
  updatedAt: Date;
  content: string;
  author: IUser | string;
  replyTo: IMessage | string;
  post: IPost | string;
}

const MessageSchema: Schema = new Schema({
  content: { type: String, required: true, minlength: 3 },
  replyTo: { type: Schema.Types.ObjectId, required: false, ref: 'Message' },
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  post: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
}, { timestamps: true });

export default mongoose.model<IMessage>('Message', MessageSchema, 'messages');
