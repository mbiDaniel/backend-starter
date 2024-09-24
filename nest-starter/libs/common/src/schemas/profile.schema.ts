import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { NomenclatureData } from './nomenclaturedata.schema';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop()
  name: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'NomenclatureData' })
  actions: NomenclatureData[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);

ProfileSchema.statics.findActions = function (query) {
  return this.find(query).populate({path: "actions", select:"data.key"})
}