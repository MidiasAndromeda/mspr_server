import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()
  .setTitle('MSPR')
  .setDescription('MSPR API Documentation')
  .setVersion('1.0')
  .addTag('qrcodes')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
