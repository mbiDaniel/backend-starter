import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Nomenclature } from './nomenclature.schema';

export type NomenclatureDataDocument = HydratedDocument<NomenclatureData>;

@Schema()
export class NomenclatureData {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Nomenclature',
    required: true,
    immutable: true,
  })
  nomen: Nomenclature;

  @Prop({ type: {} })
  data: any;

  @Prop({ required: true, immutable: true })
  accessKey: string;
}

export const NomenclatureDataSchema =
  SchemaFactory.createForClass(NomenclatureData);
