import { Injectable } from '@nestjs/common';
import { ChatDto } from './dto/chat.dto';
import { ChatResponseDto } from './dto/chat.response.dto';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import * as fs from 'fs';
import * as path from 'path';

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
      model: chatDto.model,
      messages,
      max_tokens: chatDto.maxTokens,
      temperature: chatDto.temperature,
    });

    return new ChatResponseDto(response.choices[0].message.content);
  }

  // method that receives a chatDto, processes the inference, and returns audio
  async chatAudio(chatDto: ChatDto): Promise<any> {
    const speechFile = path.resolve('./speech.mp3');
    const response = await this.chat(chatDto);
    const audioResponse = await this.openai.audio.speech.create({
      model: 'tts-1',
      voice: 'alloy',
      input: response.message,
    });
    const buffer = Buffer.from(await audioResponse.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
  }

  // method to list all the available models
  async models(): Promise<any> {
    return this.openai.models.list();
  }
}
