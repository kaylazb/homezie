import { Test, TestingModule } from '@nestjs/testing';
import { BusClassService } from './bus-class.service';

describe('BusClassService', () => {
  let service: BusClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusClassService],
    }).compile();

    service = module.get<BusClassService>(BusClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
