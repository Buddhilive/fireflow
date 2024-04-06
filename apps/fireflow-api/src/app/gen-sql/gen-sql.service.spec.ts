import { Test, TestingModule } from '@nestjs/testing';
import { GenSqlService } from './gen-sql.service';

describe('GenSqlService', () => {
  let service: GenSqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenSqlService],
    }).compile();

    service = module.get<GenSqlService>(GenSqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
