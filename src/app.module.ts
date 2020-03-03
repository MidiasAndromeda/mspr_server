import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './providers/database.provider';
import { qrCodeProviders } from './providers/qrcode.provider';


@Module({
  controllers: [AppController],
  providers: [
    ...databaseProviders,
    ...qrCodeProviders,
    AppService,
  ],
  exports: [
    ...databaseProviders,
    ...qrCodeProviders,
  ]
})
export class AppModule {}
