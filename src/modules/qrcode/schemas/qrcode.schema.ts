import * as mongoose from 'mongoose';

export const QrCodeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    code: String,
    discountRate: Number,
}, { collection: 'qrcode' });