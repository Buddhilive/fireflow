import { Module } from '@nestjs/common';
import { GenSqlService } from './gen-sql.service';
import { GenSqlController } from './gen-sql.controller';

@Module({
  controllers: [GenSqlController],
  providers: [GenSqlService],
})
export class GenSqlModule {}
