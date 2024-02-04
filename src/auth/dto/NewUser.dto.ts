import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class NewUserDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;
}
