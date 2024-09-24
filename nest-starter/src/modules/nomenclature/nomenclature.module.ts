import { Module } from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { NomenclatureController } from './nomenclature.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nomenclature, NomenclatureSchema } from '@app/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: Nomenclature.name, schema: NomenclatureSchema }])],
  controllers: [NomenclatureController],
  providers: [NomenclatureService],
  exports: [NomenclatureService]
})
export class NomenclatureModule {}
