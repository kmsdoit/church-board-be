import {Body, Controller, Post} from '@nestjs/common';
import {SignUpDto} from "./dto/sign-up.dto";
import {AuthService} from "./auth.service";
import {SignInDto} from "./dto/sign-in.dto";

@Controller('/api/auth')
export class AuthController {

    constructor(private authService : AuthService) {
    }

    @Post('/sign-up')
    async signUp(@Body() signUpDto : SignUpDto) {
        return this.authService.signUp(signUpDto);
    }

    @Post('/sign-in')
    async signIn(@Body() signInDto : SignInDto) {
        return this.authService.signIn(signInDto);
    }
}
