import { Body, Controller, Post, UnauthorizedException, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, createUserSchema } from 'src/users/dto/user.dto';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return this.authService.login(user);

  }

  
  @UsePipes(new ZodValidationPipe(createUserSchema))
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}