import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NewUserDto } from './dto/NewUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  signUpUser(@Body() newUserDto: NewUserDto) {
    return this.authService.signUp(newUserDto);
  }
}
