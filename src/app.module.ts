import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {GraphQLModule} from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeOrm} from './config/typeorm';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        TypeOrmModule.forRoot(typeOrm),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
