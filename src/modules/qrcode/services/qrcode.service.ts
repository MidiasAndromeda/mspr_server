import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { QrCode } from '../interfaces/qrcode.interface';
import { QrCodeNew } from '../interfaces/qrcode.new.interface';

@Injectable()
export class QrCodeService {
    constructor(
        @Inject('QRCODE_MODEL') private readonly qrCodeModel: Model<QrCode>
    ) { }

    async getRandomQRCode(): Promise<QrCode> {
        Logger.log('Getting random QrCode');
        const qrcodes = await this.qrCodeModel.find().exec();
        return qrcodes[Math.floor(Math.random() * qrcodes.length)];
    }

    async getQrCodeById(_id: string): Promise<QrCode> {
        Logger.log('Getting By Id', _id);
        return await this.qrCodeModel.findById({ _id });
    }

    async getAll(): Promise<QrCode[]> {
        Logger.log('Getting All QrCodes')
        return await this.qrCodeModel.find().exec();
    }

    async createQrCode(newQrCode: QrCodeNew): Promise<QrCode> {
        Logger.log(`Inserting object: { ${newQrCode.code}, ${newQrCode.discountRate} }`);
        return await this.qrCodeModel.create(newQrCode);
    }

    async updateQrCode(updatedQrCode: QrCode): Promise<QrCode> {
        Logger.log(`Updating object [ ${updatedQrCode.code}, ${updatedQrCode.discountRate} }`);
        return await this.qrCodeModel.update({ _id: updatedQrCode._id }, updatedQrCode);
    }

    async removeQrCode(_id: string): Promise<any> {
        return await this.qrCodeModel.remove({ _id });
    }
}