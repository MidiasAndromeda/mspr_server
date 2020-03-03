import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb+srv://admin:admin@mspr-stoqz.mongodb.net/mspr?retryWrites=true&w=majority', {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }),
    },
];