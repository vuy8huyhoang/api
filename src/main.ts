import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port=process.env.PORT || 3000;
  console.log(`Ứng dụng đang chạy trên cổng ${port}`);
  await app.listen(port);
}
bootstrap();
