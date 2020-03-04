import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './modules/database/database.module';
import { QrCodeModule } from './modules/qrcode/qrcode.module';


@Module({
  controllers: [AppController],
  imports: [
    DatabaseModule,
    QrCodeModule
  ]
})
export class AppModule {}
