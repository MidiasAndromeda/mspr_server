import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QRCode } from './entity/QRCode.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getRandomQrCode(): Promise<QRCode> {
    return await this.appService.findRandomQRCode();
  }
}
