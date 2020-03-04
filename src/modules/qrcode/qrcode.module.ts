import { Module } from '@nestjs/common';
import { qrCodeProviders } from './providers/qrcode.provider';
import { QrCodeService } from './services/qrcode.service';
import { DatabaseModule } from '../database/database.module';

const providers = [
    ...qrCodeProviders,
    QrCodeService
]

@Module({
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
export class QrCodeModule {}