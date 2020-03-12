import {
    Body,
    Controller,
    Get,
    Param,
    Post
} from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    //Test for continuous deployment
    @Get('test')
    test() {
        return 'Test pour le projet mspr.';
    }

    @Get('user/:id')
    async findById(@Param('id') _id: string): Promise<User> {
        return await this.userService.findById(_id);
    }

    @Post('user')
    async loginUser(@Body() userCredentials: User): Promise<boolean> {
        return await this.userService.getUserByUsernameAndPassword(userCredentials.username, userCredentials.password);
    }

}
