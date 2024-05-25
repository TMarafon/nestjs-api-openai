import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiController } from './open-ai/open-ai.controller';
import { OpenAiService } from './open-ai/open-ai.service';

@Module({
  imports: [],
  controllers: [AppController, OpenAiController],
  providers: [AppService, OpenAiService],
})
export class AppModule {}
