import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FileDocument = HydratedDocument<File>;

@Schema()
export class File {
  @Prop()
  name: string;

  @Prop()
  mimetype: string;

  @Prop()
  url: string;

  @Prop()
  gcloudId: string;
}

export const FileSchema = SchemaFactory.createForClass(File);