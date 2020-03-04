import { Module } from '@nestjs/common';
import { DatabaseProviders } from './providers/database.provider';

const providers = [
    ...DatabaseProviders
]

@Module({
    exports: [
        ...providers
    ],
    providers: [
        ...providers
    ],
})
export class DatabaseModule {}