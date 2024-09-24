import {
  EntityRepository,
  LoginUserDTO,
  User,
  UserDocument,
} from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModelInterface } from './interface';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from '@app/config';
import { permission } from 'process';

@Injectable()
export class AuthService extends EntityRepository<UserDocument> {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument> & UserModelInterface,
    private jwtService: JwtService,
  ) {
    super(userModel);
  }

  async loginUser(user: LoginUserDTO) {
    try {
      let authUser = await this.userModel.verifyUser(user.email, user.pwd);
      
      let actions = authUser.profile?.actions?.map((action) => action.data.key) || []      
      const payload = { userID: authUser._id };

      return {
        message: 'Login successful',
        status: 'success',
        data: {
          access_token: this.jwtService.sign(payload, {secret: JWT_SECRET, expiresIn: '1h'}),
         user: {
          fname: authUser.fname,
          lname: authUser.lname,
          email: authUser.email,
          permissions: actions
         },
        }
      };
    } catch (error) {
      return { message: 'Incorrect credentials', status: 'error' };
    }
  }
}
