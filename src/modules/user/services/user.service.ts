import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL') private readonly userModel: Model<User>
    ) { }

    async getUserById(_id: string): Promise<User> {
        Logger.log('Getting By Id', _id);
        return await this.userModel.findById({ _id });
    }

    async getUserByUsernameAndPassword(username: string, password: string): Promise<boolean> {
        Logger.log(`Getting By Credentials: ${username} ${password}`);
        const user = await this.userModel.findOne({ username, password })
        return !!user;
    }
}