import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiController } from './open-ai/open-ai.controller';
import { OpenAiService } from './open-ai/open-ai.service';
import { TokenMiddleware } from './middleware/token.middleware';

@Module({
  imports: [],
  controllers: [AppController, OpenAiController],
  providers: [AppService, OpenAiService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes('open-ai');
  }
}
