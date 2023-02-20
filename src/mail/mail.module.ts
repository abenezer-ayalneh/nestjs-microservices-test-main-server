import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3004,
        },
      },
    ]),
  ],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
