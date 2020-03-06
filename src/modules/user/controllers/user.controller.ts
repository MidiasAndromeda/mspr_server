import {
    Body,
    Controller,
    Get,
    Param
    } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('user/:id')
    async getQrCodeById(@Param('id') _id: string): Promise<User> {
        return await this.userService.getUserById(_id);
    }

    @Get('user')
    async createQrCode(@Body() userCredentials: User): Promise<boolean> {
        return await this.userService.getUserByUsernameAndPassword(userCredentials.username, userCredentials.password);
    }

}
