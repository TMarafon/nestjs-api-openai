import { Test, TestingModule } from '@nestjs/testing';
import { Llama3Service } from './llama3.service';

describe('Llama3Service', () => {
  let service: Llama3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Llama3Service],
    }).compile();

    service = module.get<Llama3Service>(Llama3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
