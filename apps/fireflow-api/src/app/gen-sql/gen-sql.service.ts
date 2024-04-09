import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { SQLPromptDTO } from '../_shared/dto/sql-prompt.dto';

@Injectable()
export class GenSqlService {
    genAI: GoogleGenerativeAI;
    model: GenerativeModel;

    constructor(private _configService: ConfigService) {
        this.genAI = new GoogleGenerativeAI(_configService.get('API_KEY'));
        this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    }

    async getResponse(promptRequest: SQLPromptDTO): Promise<string> {
        const result = await this.model.generateContent(promptRequest.content);
        const response = await result.response;
        const text = response.text();
        return text;
    }
}
