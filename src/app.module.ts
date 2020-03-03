import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { QRCode } from './entity/QRCode.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db5000316292.hosting-data.io',
      database: 'dbs308641',
      username: 'dbu213702',
      password: 'Azertyuiop34@',
      entities: [ QRCode ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([QRCode])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
 }
