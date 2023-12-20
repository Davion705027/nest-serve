import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Response } from './common/response';
import { HttpExceptionFilter } from './common/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 响应
  app.useGlobalInterceptors(new Response)

  // 内置验证
  app.useGlobalPipes(new ValidationPipe());
  // 异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
