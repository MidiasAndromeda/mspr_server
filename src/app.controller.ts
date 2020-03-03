import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QrCode } from './interfaces/qrcode.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRandomQrCode(): Promise<QrCode> {
    return await this.appService.findRandomQRCode();
  }
}
