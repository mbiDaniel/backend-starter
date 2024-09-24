import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {logger: ["verbose"]});
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Backend Starter')
    .setDescription('This is a starter templete for a backend API')
    .setVersion('1.0')
    .addServer('http://localhost:8000/', "Local Environment")
    .addServer('http://localhost:8000/', "Network Environment")
    .addBearerAuth({type: "http"}, "Auth")
    .addTag('Backend')
    .build();


  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(8000);
}
bootstrap();
