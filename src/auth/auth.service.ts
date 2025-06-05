// auth.service.ts
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Sesuaikan path sesuai struktur projekmu
import { CreateUserDto } from 'src/users/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/auth.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async login(user: LoginDto) {

    const result = await this.validateUser(user.email, user.password);

    const payload = { sub: result.id, role: result.role };


    return {
          data: {
            "id": result.id,
            "name": result.name,
            "email": result.email,
            "phone_number": result.phone_number,
            "profile_picture": result.profile_picture,
            "address": result.address,
            "access_token": this.jwtService.sign(payload),
            
          },
          message:"sucess login"
    };
  }

  async register(createUserDto: CreateUserDto) {

    const existingUser = await this.usersService.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new BadRequestException({ "fieldErrors": { "email": ["email already exist"] } });
    }

    const listUser = await this.usersService.findByNumber(createUserDto.phone_number);
    if (listUser.length > 0) {
      throw new BadRequestException({ "fieldErrors": { "phone_number": ["phone number already exist"] } });
    }

    const newUser = await this.usersService.create({...createUserDto});

    if (!newUser) throw new Error("failed add user")

    return {
      message: 'Registration successful',
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
    };
  }
}
