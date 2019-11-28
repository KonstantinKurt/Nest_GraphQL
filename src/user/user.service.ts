import {HttpException, Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from './entity/user.entity';
import {Repository} from 'typeorm';
import {UserObjectDto} from './dto/user-object.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {
    }

    async create(userData: UserObjectDto): Promise<UserEntity> {
        try {
            const newUser = await this.userRepository.create(userData);
            await newUser.save();
            Logger.log(newUser);
            return newUser;
        } catch (error) {
            throw new HttpException({
                error: error.message,
            }, 400);
        }

    }

    async findAll(): Promise<UserEntity[]> {
        try {
            return this.userRepository.find();
        } catch (error) {
            throw new HttpException({
                error: error.message,
            }, 400);
        }

    }

    async findOne(id: string): Promise<UserEntity> {
        try {
            return this.userRepository.findOne({id});
        } catch (error) {
            throw new HttpException({
                error: error.message,
            }, 400);
        }

    }

    async delete(id: string): Promise<any> {
        try {
            return this.userRepository.delete({id});
        } catch (error) {
            throw new HttpException({
                error: error.message,
            }, 400);
        }

    }

    async update(id: string, upadateData: UserObjectDto): Promise<any> {
        try {
            return this.userRepository.update({id}, upadateData);
        } catch (error) {
            throw new HttpException({
                error: error.message,
            }, 400);
        }

    }
}
