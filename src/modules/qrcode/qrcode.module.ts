import { Module } from '@nestjs/common';
import { QrCodeController } from './controllers/qrcode.controller';
import { qrCodeProviders } from './providers/qrcode.provider';
import { QrCodeService } from './services/qrcode.service';
import { DatabaseModule } from '../database/database.module';

const providers = [
    ...qrCodeProviders,
    QrCodeService
]

@Module({
    controllers: [
        QrCodeController
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
export class QrCodeModule {}