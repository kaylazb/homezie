import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}