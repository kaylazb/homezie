import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/exceptions.interceptor';
import { ResponseInterceptor } from './common/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // akan menghapus properti yang tidak ada di DTO
      forbidNonWhitelisted: true, // error jika ada properti asing
      transform: true, // konversi ke tipe yang sesuai DTO
    }),
  );

  app.enableCors({
    origin: '*', // Atau tentukan ['http://localhost:3000'] untuk lebih aman
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Jika kamu perlu mengirim cookie
  });
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
