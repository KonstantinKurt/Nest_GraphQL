import {
    IsString,
    IsEmail,
    IsNotEmpty,
    Length,
} from 'class-validator';
import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class UserObjectDto {

    @Field({})
    @IsString()
    readonly id?: string;

    @Field()
    readonly createdAt?: Date;

    @Field()
    @IsNotEmpty()
    @IsString()
    @Length(8, 20)
    readonly password: string;

    @Field()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

}
