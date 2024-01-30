import { Test, TestingModule } from '@nestjs/testing';
import { ProbandoController } from './probando.controller';

describe('ProbandoController', () => {
  let controller: ProbandoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProbandoController],
    }).compile();

    controller = module.get<ProbandoController>(ProbandoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
