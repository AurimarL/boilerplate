import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MainModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
