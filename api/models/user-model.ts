import nanoid from 'nanoid';
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  // methods
  comparePassword(plainPwd: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12)
  },
  email: { type: String, required: true, unique: true, },
  name: { type: String, required: true, minlength: 3 },
  password: { type: String, required: true }
}, { timestamps: true });


UserSchema.pre("save", function (next) {
  const self = this as IUser
  if (!self.isModified("password")) {
    return next();
  }
  self.password = bcrypt.hashSync(self.password, bcrypt.genSaltSync(10));
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

export default mongoose.model<IUser>('User', UserSchema);
