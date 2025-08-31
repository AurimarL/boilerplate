import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { TodoModule } from './todo.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TodoModule,
    {
      transport: Transport.TCP,
       options: {
        port: 3002
      }
    },
  );
  await app.listen();
}
bootstrap();
