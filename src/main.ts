import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Response } from './common/response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 响应
  app.useGlobalInterceptors(new Response)

  // 内置验证
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3000);
}
bootstrap();
