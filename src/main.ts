import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Response } from './common/response';
import { HttpExceptionFilter } from './common/filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 响应
  app.useGlobalInterceptors(new Response());

  // 内置验证
  app.useGlobalPipes(new ValidationPipe());
  // 异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  // swagger
  const swagger_config = new DocumentBuilder()
    .addServer('/api')
    .setTitle('Nestjs Project')
    .setDescription('Nestjs-api-doc')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swagger_config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
