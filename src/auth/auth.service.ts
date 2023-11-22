import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {User} from "../user/entity/user.entity";
import  {SignUpDto} from "./dto/sign-up.dto";
import {SignInDto} from "./dto/sign-in.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService : UserService) {
    }



    async signUp(signUpDto : SignUpDto) {
        return this.userService.save(signUpDto);
    }

    async signIn(signInDto : SignInDto) {
        const {email , password } = signInDto;

        const user = await this.userService.findByEmail(email);

        if(!user) {
            throw new UnauthorizedException('해당 이메일로 가입된 유저는 존재하지 않습니다')
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!passwordCompare) {
            throw  new UnauthorizedException('비밀번호를 확인해주세요');
        }

        return user
    }
}
