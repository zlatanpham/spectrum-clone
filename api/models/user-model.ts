import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cfg from '../cfg';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  githubId: string;
  token: string;
  coverPhoto: string;
  profileUrl: string;
  description: string;
  website: string;

  // methods
  comparePassword(plainPwd: string): Promise<boolean>;
  generateJWT(): string;
  toAuthJSON(): string;
}

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, minlength: 3 },
    password: { type: String, required: true },
    coverPhoto: { type: String, minlength: 3 },
    avatarPhoto: { type: String, minlength: 3 },
    profileUrl: { type: String, minlength: 3 },
    description: { type: String, minlength: 3 },
    website: { type: String, minlength: 3 },
    githubId: { type: String, unique: true },
    token: { type: String, minlength: 3 },
  },
  { timestamps: true },
);

UserSchema.pre('save', function(next) {
  const self = this as IUser;
  if (!self.isModified('password')) {
    return next();
  }
  // @ts-ignore
  this.password = bcrypt.hashSync(self.password, bcrypt.genSaltSync(10));
  next();
});

UserSchema.methods.comparePassword = async function(
  plainPwd: string,
): Promise<boolean> {
  try {
    const self = this as IUser;
    const isOk = await bcrypt.compare(plainPwd, self.password);
    return isOk;
  } catch (err) {
    throw err;
  }
};

UserSchema.methods.generateJWT = function() {
  return jwt.sign(
    {
      name: this.name,
      id: this._id,
    },
    cfg.JWT_SECRET,
    { expiresIn: cfg.JWT_TTL },
  );
};

UserSchema.methods.toAuthJSON = function() {
  return {
    id: this._id,
    name: this.name,
    token: this.generateJWT(),
  };
};

export default mongoose.model<IUser>('User', UserSchema, 'users');
