import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrm: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    database: 'GraphQL',
    synchronize: true,
    logging: false,
    entities: ['.src/**/*.entity.ts', './dist/**/*.entity.js'],
};
