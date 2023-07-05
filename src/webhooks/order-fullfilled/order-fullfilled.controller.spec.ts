import { Test, TestingModule } from '@nestjs/testing';
import { OrderFullfilledController } from './order-fullfilled.controller';

describe('OrderFullfilledController', () => {
  let controller: OrderFullfilledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderFullfilledController],
    }).compile();

    controller = module.get<OrderFullfilledController>(
      OrderFullfilledController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
