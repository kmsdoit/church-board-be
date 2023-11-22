import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum RoleEnumType {
    USER = 'user',
    ADMIN = 'admin'
}

export enum SnsEnumType {
    EMAIL = 'email',
    KAKAO = 'kakao',
    GOOGLE = 'google',
    NAVER = 'naver,'
}


@Entity({name : "users"})
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    name : string;

    @Column()
    birth : string;

    @Column({
        type : 'enum',
        enum : RoleEnumType,
        default : RoleEnumType.USER
    })
    role : RoleEnumType.USER;


    @Column({
        type : 'enum',
        enum : SnsEnumType,
        default : SnsEnumType.EMAIL
    })
    sns_type : SnsEnumType.EMAIL
}
