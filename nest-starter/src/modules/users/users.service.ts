import { Injectable } from '@nestjs/common';
import { EntityRepository, User, UserDocument } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { returnSuccess } from '@app/common/helpers';

@Injectable()
export class UsersService extends EntityRepository<UserDocument> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument> & {findUserProfile: any}) {
    super(userModel);
  }

  async findAll() {
    return returnSuccess(this.userModel.find({}, {pwd: 0}).populate({path: "profile", select: "name"}));
  }
}
