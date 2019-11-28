import {
    IsString,
    IsEmail,
    IsNotEmpty,
    Length,
} from 'class-validator';
import {Field, InputType, ObjectType} from 'type-graphql';

@InputType()
export class UserInputDto {

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
