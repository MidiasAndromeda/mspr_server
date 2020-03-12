import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './modules/database/database.module';
import { QrCodeModule } from './modules/qrcode/qrcode.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [
    DatabaseModule,
    QrCodeModule,
    UserModule,
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
