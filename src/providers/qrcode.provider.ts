import { Connection } from 'mongoose';
import { QrCodeSchema } from 'src/schemas/qrcode.schema';

export const qrCodeProviders = [
    {
        provide: 'QRCODE_MODEL',
        useFactory: (connection: Connection) => connection.model('QrCode', QrCodeSchema),
        inject: ['DbConnectionToken'],
    },
];