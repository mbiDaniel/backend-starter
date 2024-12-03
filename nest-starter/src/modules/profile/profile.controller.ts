import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Roles } from '../auth/roles.decorator';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Roles('profile.create')
  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(createProfileDto);
  }

  @Roles('profile.read')
  @Get()
  findAll() {
    return this.profileService.find();
  }

  @Roles('profile.read')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profileService.findOne({ _id: id });
  }

  @Roles('profile.update')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update({ _id: id }, updateProfileDto);
  }

  @Roles('profile.delete')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.delete({ _id: id });
  }
}
