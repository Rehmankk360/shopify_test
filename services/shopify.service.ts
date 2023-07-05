import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { SHOPIFY_API_ROUTES } from '../constants';
import { ShopifyProductType } from 'types';

@Injectable()
export class ShopifyService {
  private readonly api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.SHOPIFY_API_URL,
      headers: {
        'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
      },
    });
  }

  async getProducts(): Promise<ShopifyProductType[]> {
    try {
      const response = await this.api.get(SHOPIFY_API_ROUTES.GET.PRODUCTS);
      return response.data;
    } catch (er) {
      console.log(er);
    }
  }

  async createOrder(order: any) {
    try {
      const response = await this.api.post(
        SHOPIFY_API_ROUTES.POST.CREATE_ORDER,
        order,
      );
      return response.data;
    } catch (er) {
      console.log(er);
    }
  }

  async updateOrder(id: string, valuesToUpdate: any) {
    try {
      await this.api.put(SHOPIFY_API_ROUTES.PUT.UPDATE_ORDER(id), {
        order: valuesToUpdate,
      });
    } catch (er) {
      console.log(er);
    }
  }
}
