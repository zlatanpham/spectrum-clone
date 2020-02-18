import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './user-model';
import { IMessage } from './message-model';
import { IPost } from './post-model';

export interface IReaction extends Document {
  createdAt: Date;
  updatedAt: Date;
  reaction: string;
  author: IUser | string;
  post: IPost | string;
  message: IMessage | string;
}

const ReactionSchema: Schema = new Schema({
  reaction: { type: String, required: true, minlength: 3 },
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  post: { type: Schema.Types.ObjectId, required: false, ref: 'Post' },
  message: { type: Schema.Types.ObjectId, required: false, ref: 'Message' },
}, { timestamps: true });

export default mongoose.model<IReaction>('Reaction', ReactionSchema, 'reactions');
