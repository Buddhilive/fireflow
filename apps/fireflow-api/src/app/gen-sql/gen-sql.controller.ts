import { Controller } from '@nestjs/common';
import { GenSqlService } from './gen-sql.service';

@Controller('gen-sql')
export class GenSqlController {
  constructor(private readonly genSqlService: GenSqlService) {}
}
