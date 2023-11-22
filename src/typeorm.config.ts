import {TypeOrmModuleOptions} from "@nestjs/typeorm";


export const typeormConfig : TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username : 'church',
    password : 'church1004#',
    entities : [__dirname + "/**/*.entity{.ts,.js}"],
    synchronize : true,
    logging : true
}
