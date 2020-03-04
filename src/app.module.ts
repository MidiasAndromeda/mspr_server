import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { QrCodeModule } from './modules/qrcode/qrcode.module';


@Module({
  imports: [
    DatabaseModule,
    QrCodeModule
  ]
})
export class AppModule {}
