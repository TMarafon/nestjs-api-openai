import { Injectable } from '@nestjs/common';
import { ChatDto } from './dto/chat.dto';
import { ChatResponseDto } from './dto/chat.response.dto';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

@Injectable()
export class OpenAiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI();
  }

  // method to handle request
  async chat(chatDto: ChatDto): Promise<ChatResponseDto> {
    const system = 'You are a helpful assistant.';

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: system,
      },
    ];

    chatDto.messages.forEach((message) => {
      messages.push(message);
    });

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o',
      messages,
    });

    return new ChatResponseDto(response.choices[0].message.content);
  }

  // method to list all the available models
  async models(): Promise<any> {
    return this.openai.models.list();
  }
}
