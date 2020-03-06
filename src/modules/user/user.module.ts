import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { userProviders } from './providers/user.provider';
import { UserService } from './services/user.service';
import { DatabaseModule } from '../database/database.module';

const providers = [
    ...userProviders,
    UserService
]

@Module({
    controllers: [
        UserController
    ],
    imports: [
        DatabaseModule
    ],
    exports: [
        ...providers
    ],
    providers: [
        ...providers
    ],
})
export class UserModule { }