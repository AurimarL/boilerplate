import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('Boilerplate example')
    .setDescription('The boilerplate API description')
    .setVersion('1.0')
    .addTag('boilerplate')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(process.env.port ?? 3001);
}
bootstrap();
