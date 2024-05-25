import { ChatCompletionMessageParam } from 'openai/resources';

export class ChatDto {
  messages: ChatCompletionMessageParam[];
  maxTokens: number;
  temperature: number;
  model: string;

  constructor(
    messages: ChatCompletionMessageParam[],
    maxTokens: number,
    temperature: number,
    model: string,
  ) {
    this.messages = messages;
    this.maxTokens = maxTokens;
    this.temperature = temperature;
    this.model = model;
  }
}
