import {  Module } from '@nestjs/common';
import { NomendataService } from './nomendata.service';
import { NomendataController } from './nomendata.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  NomenclatureData,
  NomenclatureDataSchema,
} from '@app/common/schemas/nomenclaturedata.schema';
import { NomenclatureModule } from '../nomenclature/nomenclature.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: NomenclatureData.name, schema: NomenclatureDataSchema },
    ]),
    NomenclatureModule
  ],
  controllers: [NomendataController],
  providers: [NomendataService],
})
export class NomendataModule {
}
