import { Connection } from 'mongoose';
import { DATABASE_TOKEN } from 'src/modules/database/consts/database.const';
import { QrCodeSchema } from 'src/modules/qrcode/schemas/qrcode.schema';

export const qrCodeProviders = [
    {
        provide: 'QRCODE_MODEL',
        useFactory: (connection: Connection) => connection.model('QrCode', QrCodeSchema),
        inject: [DATABASE_TOKEN],
    },
];