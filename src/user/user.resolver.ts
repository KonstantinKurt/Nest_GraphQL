import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UserService} from './user.service';
import {UserObjectDto} from './dto/user-object.dto';
import {UserInputDto} from './dto/user-input.dto';
import {UserEntity} from './entity/user.entity';

@Resolver('User')
export class UserResolver {
    constructor(
        private userService: UserService,
    ) {
    }

    @Query(() => [UserObjectDto])
    async findAll() {
        return this.userService.findAll();
    }

    @Query(() => UserObjectDto)
    async find(@Args('id') id: string) {
        return this.userService.findOne(id);
    }

    @Mutation(() => UserObjectDto)
    async create(@Args('userData') userData: UserInputDto) {
        return await this.userService.create(userData);
    }

    @Mutation(() => UserObjectDto)
    async update(@Args('id') id: string, @Args('updateData') updateData: UserInputDto) {
        return this.userService.update(id, updateData);
    }

    @Mutation(() => UserObjectDto)
    async delete(@Args('id') id: string) {
        return this.userService.delete(id);
    }

}
