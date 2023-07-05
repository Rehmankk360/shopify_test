import { Body, Controller, Post } from '@nestjs/common';
import { DUMMY_ORDER } from '../../constants';
import { ShopifyService } from 'services/shopify.service';
import { DatabaseService } from '../../services/database.service';

@Controller('create-order')
export class CreateOrderController {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly databaseService: DatabaseService,
  ) {}
  @Post()
  async createOrder(@Body() post): Promise<any> {
    let order = post;

    // Change "order" to post to create customizable in shopify orders
    this.databaseService.log(JSON.stringify(post));

    order = DUMMY_ORDER;

    try {
      const newOrder = await this.shopifyService.createOrder(order);
      return newOrder;
    } catch (error) {
      return error;
    }
  }
}
