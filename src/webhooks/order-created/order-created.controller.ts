import { Body, Controller, Post } from '@nestjs/common';
import { WEBHOOK_NAMES } from '../../../constants';
import { NodeMailer } from 'services/nodeMailer.service';
import { ShopifyService } from 'services/shopify.service';
import { DatabaseService } from '../../../services/database.service';

@Controller('order-created')
export class OrderCreatedController {
  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly nodemailer: NodeMailer,
    private readonly databaseService: DatabaseService,
  ) {}
  @Post()
  async orderCreated(@Body() order): Promise<any> {
    const { id: order_id, line_items, email, contact_email } = order;

    this.databaseService.log(JSON.stringify(order));

    if (line_items.length) {
      // Using fake email inbox from mailtrap
      this.nodemailer.sendMail({
        to: email || contact_email,
        subject: 'Order received',
        text: `Your order ${order_id} has been received with ${line_items.length} items`,
      });

      // const {[0]: firstCartItem} = line_items
      // if(firstCartItem){
      //     const {id} = firstCartItem

      // }
    }

    console.log(
      `WEBHOOK ${WEBHOOK_NAMES.ORDER_RECEIVED} RECEIVED`,
      JSON.stringify(order),
    );
    return `WEBHOOK ${WEBHOOK_NAMES.ORDER_RECEIVED} RECEIVED`;
  }
}
