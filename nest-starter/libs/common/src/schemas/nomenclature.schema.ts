import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { NomenclatureColType } from '@app/common';

export type NomenclatureDocument = HydratedDocument<Nomenclature>;

@Schema()
export class Nomenclature {
  @Prop({unique: true, required: true})
  code: string;

  @Prop()
  name: string

  @Prop({ required: true, immutable: true, unique: true })
  accessKey: string;

  @Prop()
  cols: NomenclatureColType[];

}

export const NomenclatureSchema = SchemaFactory.createForClass(Nomenclature);