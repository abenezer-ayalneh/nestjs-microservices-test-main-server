import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MailSendRequest } from './request/mail.request';

interface MailGrpcService {
  sendMail(data: {
    to: string;
    from: string;
    template: string;
    subject: string;
  }): Observable<any>;
}
@Injectable()
export class MailService implements OnModuleInit {
  private mailGrpcService: MailGrpcService;

  constructor(@Inject('MAIL_CLIENT') private mailClient: ClientGrpc) {}

  onModuleInit() {
    this.mailGrpcService =
      this.mailClient.getService<MailGrpcService>('MailGrpcService');
  }

  sendMail(request: MailSendRequest) {
    return this.mailGrpcService.sendMail({ ...request });
  }
}
