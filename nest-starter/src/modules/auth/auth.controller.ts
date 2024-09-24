import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDTO } from '@app/common';
import { Public } from '@app/common/helpers';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @ApiResponse({
    status: 201,
    type: LoginUserDTO,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  login(@Body() user: LoginUserDTO) {
    return this.authService.loginUser(user);
  }
  @Public()
  @Post('register')
  register(@Body() user: CreateUserDto) {
    return this.authService.create(user);
  }
}
