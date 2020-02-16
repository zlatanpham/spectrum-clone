import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  // methods
  comparePassword(plainPwd: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, },
  name: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true },
  coverPhoto: { type: String, minlength: 3 },
  avatarPhoto: { type: String, minlength: 3 },
}, { timestamps: true });


UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // @ts-ignore
  this.password = bcrypt.hashSync(self.password, bcrypt.genSaltSync(10));
  next();
})

UserSchema.methods.comparePassword = async function (plainPwd: string): Promise<boolean> {
  try {
    const self = this as IUser
    const isOk = await bcrypt.compare(plainPwd, self.password)
    return isOk
  } catch (err) {
    throw err
  }
}

export default mongoose.model<IUser>('User', UserSchema, 'users');
