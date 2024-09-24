import {
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  fname: string;

  @IsString()
  lname: string;

  @IsPhoneNumber('CM')
  phone: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  pwd: string;
}
