import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { QrCode } from '../interfaces/qrcode.interface';

@Injectable()
export class QrCodeService {
    constructor(
        @Inject('QRCODE_MODEL') private readonly qrCodeModel: Model<QrCode>
    ) { }

    async getRandomQRCode(): Promise<QrCode> {
        const qrcodes = await this.qrCodeModel.find().exec();
        return qrcodes[Math.floor(Math.random() * qrcodes.length)];
    }

    async getAll(): Promise<QrCode[]> {
        return await this.qrCodeModel.find().exec();
    }
}