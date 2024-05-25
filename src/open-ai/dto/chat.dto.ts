import { ChatCompletionMessageParam } from 'openai/resources';

export class ChatDto {
  messages: ChatCompletionMessageParam[];
  maxTokens: number;
  temperature: number;

  constructor(
    messages: ChatCompletionMessageParam[],
    maxTokens: number,
    temperature: number,
  ) {
    this.messages = messages;
    this.maxTokens = maxTokens;
    this.temperature = temperature;
  }
}
