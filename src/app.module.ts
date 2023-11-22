import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeormConfig} from "./typeorm.config";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(typeormConfig), AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
