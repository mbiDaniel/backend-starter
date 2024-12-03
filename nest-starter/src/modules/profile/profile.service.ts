import { Injectable } from '@nestjs/common';
import { EntityRepository, Profile, ProfileDocument } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { returnSuccess } from '@app/common/helpers';

@Injectable()
export class ProfileService extends EntityRepository<ProfileDocument> {
  constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<ProfileDocument> & { findActions: any },
  ) {
    super(profileModel);
  }

  async find() {
    return returnSuccess(this.profileModel.findActions().exec());
  }
}
