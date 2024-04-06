import { Test, TestingModule } from '@nestjs/testing';
import { GenSqlController } from './gen-sql.controller';
import { GenSqlService } from './gen-sql.service';

describe('GenSqlController', () => {
  let controller: GenSqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenSqlController],
      providers: [GenSqlService],
    }).compile();

    controller = module.get<GenSqlController>(GenSqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
