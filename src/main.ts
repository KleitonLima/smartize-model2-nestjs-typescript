import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Smart Store')
    .setDescription('API responsável pela gestão da Loja Smart Store')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('users')
    .addTag('games')
    .addTag('bags')
    .addTag('genres')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
