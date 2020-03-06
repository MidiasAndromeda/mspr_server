import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
    } from '@nestjs/common';
import { QrCode } from '../interfaces/qrcode.interface';
import { QrCodeNew } from '../interfaces/qrcode.new.interface';
import { QrCodeService } from '../services/qrcode.service';

@Controller()
export class QrCodeController {
    constructor(private readonly qrCodeService: QrCodeService) { }

    @Get('qrcodes')
    async getAllQrCodes(): Promise<QrCode[]> {
        return await this.qrCodeService.getAll();
    }

    @Get('qrcode')
    async getRandomQrCode(): Promise<QrCode> {
        return await this.qrCodeService.getRandomQRCode();
    }

    @Get('qrcode/:id')
    async getQrCodeById(@Param('id') _id: string): Promise<QrCode> {
        return await this.qrCodeService.getQrCodeById(_id);
    }

    @Post('qrcode')
    async createQrCode(@Body() newQrCode: QrCodeNew) {
        return await this.qrCodeService.createQrCode(newQrCode)
    }

    @Put('qrcode')
    async updateQrCode(@Body() updatedQrCode: QrCode) {
        return await this.qrCodeService.updateQrCode(updatedQrCode);
    }

    @Delete('qrcode/:id')
    async deleteQrCode(@Param('id') _id: string): Promise<any> {
        return await this.qrCodeService.removeQrCode(_id);
    }
}
