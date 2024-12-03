import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from '@app/common';
import { Public } from '@app/common/helpers';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  login(@Body() user: LoginUserDTO) {
    return this.authService.loginUser(user);
  }
  @Public()
  @Post('register')
  register(@Body() user: CreateUserDto) {
    return this.authService.create(user);
  }
}
