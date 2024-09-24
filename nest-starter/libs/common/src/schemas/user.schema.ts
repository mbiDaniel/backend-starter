import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { compareHash, hashString } from '../utils';
import { Profile } from './profile.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fname: string;

  @Prop()
  lname: string;

  @Prop()
  phone: string;

  @Prop({ lowercase: true, unique: true, required: true })
  email: string;

  @Prop({ required: true })
  pwd: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  verified: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' })
  profile: Profile;

  @Prop({ type: Date, default: () => new Date(), immutable: true })
  created: string;

  @Prop({ type: Date, default: () => new Date() })
  updated: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.statics.verifyUser = async function (email, password) {
  try {
    let user = await this.findOne({ email }).populate({path: "profile", populate: {path: "actions", select: "data.key"}})
    if (user) {
      let isMatch = await compareHash(password, user.pwd);
      if (isMatch) {
        return Promise.resolve(user);
      }
    }
    throw new Error('Invalid User');
  } catch (error) {
    return Promise.reject(null);
  }
};

UserSchema.pre("save", async function (next) {
  if(this.isNew) {
    this.pwd = await hashString(this.pwd)
    next()
  } else {
    next()
  }
})

UserSchema.statics.findUserProfile = async function (query) {
  return this.find(query, {pwd: 0}).populate({path: 'profile', populate: {path: "actions", select: "data.key"}, select: "actions"})
}