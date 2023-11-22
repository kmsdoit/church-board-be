import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entity/user.entity";
import {Repository} from "typeorm";
import {SignUpDto} from "../auth/dto/sign-up.dto";
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository : Repository<User>) {
    }

    async save(signUpDto : SignUpDto) {
        const {email, password, name , birth} = signUpDto;
        const hashed_password = await bcrypt.hash(password,10);

        const user = new User();
        user.email = email;
        user.password = hashed_password;
        user.name = name;
        user.birth = birth;

        await this.userRepository.save(user)

    }

    async findByEmail(email : string) : Promise<User> {
        return this.userRepository.findOne({
            where : {
                email
            }
        })
    }
}
