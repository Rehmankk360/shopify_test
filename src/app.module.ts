import { Module } from '@nestjs/common';
import { AppController } from './index.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CreateOrderController } from './create-order/create-order.controller';
import { ConfigModule } from '@nestjs/config';
import { ShopifyService } from 'services/shopify.service';
import { OrderCreatedController } from './webhooks/order-created/order-created.controller';
import { OrderFullfilledController } from './webhooks/order-fullfilled/order-fullfilled.controller';
import { NodeMailer } from 'services/nodeMailer.service';
import { DatabaseService } from '../services/database.service';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
  controllers: [
    AppController,
    ProductsController,
    CreateOrderController,
    OrderCreatedController,
    OrderFullfilledController,
  ],
  providers: [AppService, ShopifyService, NodeMailer, DatabaseService],
})
export class AppModule {}
