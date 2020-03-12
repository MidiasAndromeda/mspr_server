import { Test } from '@nestjs/testing';
import { QrCodeController } from '../src/modules/qrcode/controllers/qrcode.controller';
import { QrCode } from '../src/modules/qrcode/interfaces/qrcode.interface';
import { QrCodeService } from '../src/modules/qrcode/services/qrcode.service';

describe('QrCodeController', () => {
    let qrCodeController: QrCodeController;
    let qrCodeService: QrCodeService;
    
    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [QrCodeController],
            providers: [
                {
                    provide: QrCodeService,
                    useValue: {
                        getAll: jest.fn()
                    }
                }
            ],
        }).compile();
        qrCodeService = moduleRef.get<QrCodeService>(QrCodeService);
        qrCodeController = moduleRef.get<QrCodeController>(QrCodeController);
    });


    describe('getAllQrCodes', () => {
        it('should return an array of qrcodes', async () => {
            let result: Promise<QrCode[]>;
            jest.spyOn(qrCodeService, 'getAll').mockImplementation(() => result);

            expect(await qrCodeController.getAllQrCodes()).toBe(result);
        });
    });

    describe('getAllQrCodes', () => {
        it('should return an array of qrcodes', async () => {
            let result: Promise<QrCode[]>;
            jest.spyOn(qrCodeService, 'getAll').mockImplementation(() => result);

            expect(await qrCodeController.getAllQrCodes()).toBe(result);
        });
    });
});
