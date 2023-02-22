import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'mail',
          protoPath: join(__dirname, 'proto/mail.proto'),
          // url: '0.0.0.0:5000',
        },
      },
    ]),
  ],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
