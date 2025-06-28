import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, createUserSchema, UpdateUserDto, updateUserSchema } from './dto/user.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const id = uuidv4().replace(/-/g, '');
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = { ...data, password: hashedPassword, id };

    let filePath = '';

    const addNewUser = await this.prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: userData,
      });

      if (!newUser) throw new Error('Failed to create user');

      try {
        filePath = await this.generateQR(newUser.id);
      } catch (error) {
        console.error('⚠️ Gagal membuat QR:', error.message);
      }

      await tx.user.update({
        where: { id: newUser.id },
        data: { },
      });

      return {
        id: newUser.id,
        email: newUser.email,
      };
    });

    return addNewUser;
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        skip,
        take: Number(limit),
      }),
      this.prisma.user.count(),
    ]);

    return {
      data: {
        users,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: 'Success find all user',
    };
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  async findByNumber(number: string) {
    return this.prisma.user.findMany({
      where: { phone_number: number },
    });
  }

  async update(id: string, data: UpdateUserDto) {
    const parsed = updateUserSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(JSON.stringify(parsed.error.flatten()));
    }

    return this.prisma.user.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async generateQR(userId: string): Promise<string> {
    try {
      const qr = await QRCode.toDataURL(`tiketku:${userId}`);
      const base64Data = qr.replace(/^data:image\/png;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      const filename = `${userId}.png`;
      const relativePath = path.join('image', 'qr', filename);
      const absolutePath = path.join(process.cwd(), relativePath);

      const dir = path.dirname(absolutePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(absolutePath, buffer);
      return relativePath;
    } catch (err) {
      console.error('QR generation failed:', err);
      throw new Error('QR generation error');
    }
  }
}
