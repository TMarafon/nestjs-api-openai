import { Test, TestingModule } from '@nestjs/testing';
import { Llama3Controller } from './llama3.controller';

describe('Llama3Controller', () => {
  let controller: Llama3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Llama3Controller],
    }).compile();

    controller = module.get<Llama3Controller>(Llama3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
