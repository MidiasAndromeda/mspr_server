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
      host: 'remotemysql.com',
      port: '3306',
      username: 'f4oV0Y1i9I',
      password: '19fE6fxkVq',
      database: 'f4oV0Y1i9I',
      entities: [ QRCode ],
      synchronize: false
    }),
    TypeOrmModule.forFeature([QRCode])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
 }
