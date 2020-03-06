import { Connection } from 'mongoose';
import { DATABASE_TOKEN } from 'src/modules/database/consts/database.const';
import { UserSchema } from '../schemas/user.schema';

export const userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [DATABASE_TOKEN],
    },
];