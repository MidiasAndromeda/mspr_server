import * as mongoose from 'mongoose';

export const QrCodeSchema = new mongoose.Schema({
    _id: String,
    code: String,
    discountRate: Number,
}, { collection: 'qrcode' });