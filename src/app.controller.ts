import { Controller, Get } from '@nestjs/common';
import { QrCode } from './modules/qrcode/interfaces/qrcode.interface';
import { QrCodeService } from './modules/qrcode/services/qrcode.service';

@Controller()
export class AppController {
  constructor(private readonly qrCodeService: QrCodeService) {}

  @Get()
  async getRandomQrCode(): Promise<QrCode> {
    return await this.qrCodeService.getRandomQRCode();
  }
}
