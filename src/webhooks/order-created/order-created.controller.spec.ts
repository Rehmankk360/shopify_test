import { Test, TestingModule } from '@nestjs/testing';
import { OrderCreatedController } from './order-created.controller';

describe('OrderCreatedController', () => {
  let controller: OrderCreatedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderCreatedController],
    }).compile();

    controller = module.get<OrderCreatedController>(OrderCreatedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
