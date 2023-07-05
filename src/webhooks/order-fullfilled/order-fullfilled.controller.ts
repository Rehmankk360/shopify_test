import { Body, Controller, Post } from '@nestjs/common';
import { ShopifyService } from 'services/shopify.service';
import { faker } from '@faker-js/faker';
import { WEBHOOK_NAMES } from '../../../constants';
import { DatabaseService } from '../../../services/database.service';

@Controller('order-fullfilled')
export class OrderFullfilledController {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly databaseService: DatabaseService,
  ) {}
  @Post()
  async orderFulfilled(@Body() order): Promise<any> {
    const { id: order_id, line_items } = order;

    this.databaseService.log(JSON.stringify(order));

    if (line_items.length) {
      this.shopifyService.updateOrder(order_id, {
        name: faker.commerce.productName(),
        note: faker.commerce.productDescription(),
        // tags: [faker.person.firstName(), faker.person.lastName()],
      });
    }

    console.log(`WEBHOOK ${WEBHOOK_NAMES.ORDER_FULFILLED} RECEIVED`);

    return `WEBHOOK ${WEBHOOK_NAMES.ORDER_FULFILLED} RECEIVED`;
  }
}
