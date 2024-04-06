import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenSqlModule } from './gen-sql/gen-sql.module';

@Module({
  imports: [GenSqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
