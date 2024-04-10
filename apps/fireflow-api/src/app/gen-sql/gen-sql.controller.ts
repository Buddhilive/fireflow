import { Body, Controller, Post } from '@nestjs/common';
import { GenSqlService } from './gen-sql.service';
import { SQLGeneratedDTO, SQLPromptDTO } from '../_shared/dto/sql-prompt.dto';

@Controller('gen-sql')
export class GenSqlController {
  constructor(private readonly genSqlService: GenSqlService) { }

  @Post()
  generateText(@Body() promptRequest: SQLPromptDTO): Promise<SQLGeneratedDTO> {
    return new Promise((resolve, reject) => {
      this.genSqlService.getResponse(promptRequest).then((res) => {
        const data: SQLGeneratedDTO = {
          content: res
        }
        resolve(data);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
