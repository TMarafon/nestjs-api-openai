import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // the application must listen to PORT env variable or 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
