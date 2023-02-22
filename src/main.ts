import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'main',
  //     protoPath: join(__dirname, 'proto/main.proto'),
  //   },
  // });

  app.enableCors();
  // await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
