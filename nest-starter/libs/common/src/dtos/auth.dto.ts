import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class LoginUserDTO {

    @ApiProperty({
        example: 'rehmat.sayani@gmail.com',
        required: true,
        name: "email"
     })
    @IsEmail()
    email: string;
  
    @ApiProperty({
        required: true,
        name: "pwd"
     })
    @IsNotEmpty()
    pwd: string;
}