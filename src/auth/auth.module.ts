import { Module } from '@nestjs/common';
import {AuthService} from "./auth.service";
import { AuthController } from './auth.controller';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {jwtConstants} from "./constants";

@Module({
    imports : [UserModule, JwtModule.register({
        global : true,
        secret : jwtConstants.secret,
        signOptions : {expiresIn : '30m'}
    }),
        PassportModule.register({
            defaultStrategy : 'jwt',
            session : false
        })
    ],
    controllers : [AuthController],
    providers : [AuthService]
})
export class AuthModule {}
