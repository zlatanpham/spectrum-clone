import mongoose, { Schema, Document } from 'mongoose';

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
  slug: { type: String, required: true, unique: true, },
  name: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true, minlength: 3 },
  coverPhoto: { type: String, minlength: 3 },
  avatarPhoto: { type: String, minlength: 3 },
  isPublic: { type: Boolean, default: true },
  status: { type: String, enum: ['active', 'archived'], default: 'active' }
}, { timestamps: true, capped: true });

export default mongoose.model<ICommunity>('Community', CommunitySchema, 'communities');
