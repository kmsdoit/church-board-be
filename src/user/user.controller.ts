import {Body, Controller, Put, UseGuards, Request} from '@nestjs/common';
import {UpdateUserDto} from "./dto/update-user.dto";
import {UserService} from "./user.service";
import {JwtGuard} from "../auth/jwt/jwt.guard";
@Controller('/api/user')
export class UserController {

    constructor(private userService : UserService) {
    }

    @UseGuards(JwtGuard)
    @Put('/update')
    async update(@Body() updateUserDto : UpdateUserDto, @Request() req) {
        return this.userService.update(updateUserDto, req.user.email);
    }
}
