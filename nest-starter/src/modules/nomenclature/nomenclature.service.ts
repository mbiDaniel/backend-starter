import {
  EntityRepository,
  Nomenclature,
  NomenclatureDocument,
} from '@app/common';
import { returnSuccess } from '@app/common/helpers';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NomenclatureService extends EntityRepository<NomenclatureDocument> {
  constructor(
    @InjectModel(Nomenclature.name)
    private nomenclatureModel: Model<NomenclatureDocument>,
  ) {
    super(nomenclatureModel);
  }

  async getNomenByCode(code: string) {
    return returnSuccess(this.nomenclatureModel.findOne({ code }))
  }
}
