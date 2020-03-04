import * as mongoose from 'mongoose';
import { CONNECTION_STRING, DATABASE_TOKEN } from '../consts/database.const';

export const DatabaseProviders = [
    {
        provide: DATABASE_TOKEN,
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(CONNECTION_STRING, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }),
    },
];