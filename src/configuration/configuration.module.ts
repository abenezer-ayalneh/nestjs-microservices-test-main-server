import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationController } from './configuration.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONFIG_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'config',
          protoPath: join(__dirname, '../custom/proto/config.proto'),
        },
      },
    ]),
  ],
  providers: [ConfigurationService],
  controllers: [ConfigurationController],
})
export class ConfigurationModule {}
