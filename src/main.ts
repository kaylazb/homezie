import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // akan menghapus properti yang tidak ada di DTO
      forbidNonWhitelisted: true, // error jika ada properti asing
      transform: true, // konversi ke tipe yang sesuai DTO
    }),
  );

  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
