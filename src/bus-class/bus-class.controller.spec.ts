import { Test, TestingModule } from '@nestjs/testing';
import { BusClassController } from './bus-class.controller';
import { BusClassService } from './bus-class.service';

describe('BusClassController', () => {
  let controller: BusClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusClassController],
      providers: [BusClassService],
    }).compile();

    controller = module.get<BusClassController>(BusClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
