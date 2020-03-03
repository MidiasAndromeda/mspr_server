import { Injectable } from '@nestjs/common';
import { QRCode } from './entity/QRCode.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(QRCode)
    private readonly qrCodeRepository: Repository<QRCode>
  ) { }

  async findRandomQRCode(): Promise<QRCode> {
    // return this.qrCodeRepository.find();
    const qrcodes = await this.qrCodeRepository.find();
    return qrcodes[Math.floor(Math.random() * qrcodes.length)];
  }
}
