import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MailSendRequest } from './request/mail.request';

@Injectable()
export class MailService {
  constructor(
    @Inject('MAIL_CLIENT') private readonly mailClient: ClientProxy,
  ) {}

  sendMail(request: MailSendRequest) {
    return this.mailClient.send({ cmd: 'sendMail' }, request);
  }
}
