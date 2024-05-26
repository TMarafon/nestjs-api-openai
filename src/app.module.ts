import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiController } from './open-ai/open-ai.controller';
import { OpenAiService } from './open-ai/open-ai.service';
import { TokenMiddleware } from './middleware/token.middleware';
import { Llama3Controller } from './llama3/llama3.controller';
import { Llama3Service } from './llama3/llama3.service';

@Module({
  imports: [],
  controllers: [AppController, OpenAiController, Llama3Controller],
  providers: [AppService, OpenAiService, Llama3Service],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes('open-ai');
  }
}
