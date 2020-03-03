import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { QrCode } from './interfaces/qrcode.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('QRCODE_MODEL') private readonly qrCodeModel: Model<QrCode>
  ) { }

  async findRandomQRCode(): Promise<QrCode> {
    const qrcodes = await this.qrCodeModel.find().exec();
    return qrcodes[Math.floor(Math.random() * qrcodes.length)];
  }
}
