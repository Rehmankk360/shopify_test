import { Controller, Get } from '@nestjs/common';
import { ShopifyService } from 'services/shopify.service';
// import { shopifyAPI } from 'services/shopify.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly shopifyService: ShopifyService) {}
  @Get()
  async getProducts(): Promise<any> {
    const products = await this.shopifyService.getProducts();

    return products;
  }
}
