import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationController } from './configuration.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONFIG_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
  ],
  providers: [ConfigurationService],
  controllers: [ConfigurationController],
})
export class ConfigurationModule {}
