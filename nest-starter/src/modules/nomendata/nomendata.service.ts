import { EntityRepository } from '@app/common';
import { NomenclatureData, NomenclatureDataDocument } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NomendataService extends EntityRepository<NomenclatureDataDocument> {
  constructor(
    @InjectModel(NomenclatureData.name)
    private nomenclatureModel: Model<NomenclatureDataDocument>,
  ) {
    super(nomenclatureModel);
  }
}
