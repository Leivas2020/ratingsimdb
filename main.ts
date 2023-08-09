import { NestFactory } from '@nestjs/core';
import { ImdbModule } from './imdb.module';

async function bootstrap() {
  const app = await NestFactory.create(ImdbModule);
  await app.listen(3002);
}
bootstrap();
