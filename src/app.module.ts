/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot(
    'to be replaced with db_uri'
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}