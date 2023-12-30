import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { ProjectModule } from './project/project.module';
// import { User } from './user/entities/user.entity';
// import { Project } from './project/entities/project.entity';
// console.log(__dirname); // /Users/admin/Desktop/code/personal/nest-serve/dist
// console.log();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'nest-test',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
        // User,Project
      ],// 用于指定在整个应用程序中的数据库表映射实体。这是应用程序的根模块配置，
                              // 用于创建数据库连接并定义整个应用程序中的所有实体
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProjectModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    },
    AppService],
})
export class AppModule {}
