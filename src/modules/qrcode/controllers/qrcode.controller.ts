import { Controller, Get } from '@nestjs/common';
import { QrCode } from '../interfaces/qrcode.interface';
import { QrCodeService } from '../services/qrcode.service';

@Controller()
export class QrCodeController {
    constructor(private readonly qrCodeService: QrCodeService) { }

    @Get('qrcode')
    async getRandomQrCode(): Promise<QrCode> {
        return await this.qrCodeService.getRandomQRCode();
    }
}
