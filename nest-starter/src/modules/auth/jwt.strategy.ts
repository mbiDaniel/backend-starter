import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@app/common';
import { JWT_SECRET } from '@app/config';
import { UserModelInterface } from './interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private userModel: Model<User> & UserModelInterface
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    });
  }

  async validate(payload: { userID: string; iat: number; exp: number }) {
    const user = await this.userModel.findUserProfile(
      { _id: payload.userID },
      { pwd: 0 }
    );
    if (user.length === 0) return null;
    const _user = user[0];
    const actions =
      _user.profile?.actions?.map((action) => action.data.key) || [];
    return { ..._user, actions };
  }
}
