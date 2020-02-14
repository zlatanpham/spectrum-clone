import mongoose, { Schema, Document } from 'mongoose';

export interface IChannel extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  slug: string;
  isPublic: boolean;
  description: string;
  coverPhoto: string;
  avatarPhoto: string;
}

const ChannelSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true, },
  name: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true, minlength: 3 },
  coverPhoto: { type: String, minlength: 3 },
  avatarPhoto: { type: String, minlength: 3 },
  isPublic: { type: Boolean, default: true },
  community: { type: Schema.Types.ObjectId, required: true, ref: 'Community' },

}, { timestamps: true });


export default mongoose.model<IChannel>('Channel', ChannelSchema, 'channels');
