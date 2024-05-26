import { Body, Controller, Post } from '@nestjs/common';
import { ChatDto } from 'src/open-ai/dto/chat.dto';
import { ChatResponseDto } from 'src/open-ai/dto/chat.response.dto';
import { Llama3Service } from './llama3.service';

@Controller('llama3')
export class Llama3Controller {
  constructor(private readonly llama3Service: Llama3Service) {}

  // method to handle request
  @Post('chat')
  async chat(@Body() chatDto: ChatDto): Promise<ChatResponseDto> {
    return this.llama3Service.chat(chatDto);
  }
}
