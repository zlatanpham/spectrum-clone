import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { IPost } from './post-model';

export interface IMessage extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string;
  author: IUser;
  replyTo: IMessage;
  post: IPost;
}

const MessageSchema: Schema = new Schema({
  content: { type: String, required: true, minlength: 3 },
  replyTo: { type: Schema.Types.ObjectId, required: false, ref: 'Message' },
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  post: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
}, { timestamps: true });

export default mongoose.model<IMessage>('Message', MessageSchema, 'messages');
