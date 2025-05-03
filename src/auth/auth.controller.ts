import { Body, Controller, Post, UnauthorizedException, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, createUserSchema } from 'src/users/dto/user.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { LoginDto, loginSchema } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body(new ZodValidationPipe(loginSchema)) body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  async register(@Body(new ZodValidationPipe(createUserSchema)) createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}