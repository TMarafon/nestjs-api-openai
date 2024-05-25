import { Body, Controller, Get, Post } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { ChatDto } from './dto/chat.dto';
import { ChatResponseDto } from './dto/chat.response.dto';

@Controller('open-ai')
export class OpenAiController {
  // constructor to inject service
  constructor(private readonly openAiService: OpenAiService) {}

  // method to handle request
  @Post('chat')
  async chat(@Body() chatDto: ChatDto): Promise<ChatResponseDto> {
    return this.openAiService.chat(chatDto);
  }

  // Get end-point to list all the available models
  @Get('models')
  async models(): Promise<any> {
    return this.openAiService.models();
  }
}
