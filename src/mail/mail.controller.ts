import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { MailService } from './mail.service';
import { MailSendRequest } from './request/mail.request';

@Controller('mail')
@UseGuards(JwtAuthGuard)
export class MailController {
  constructor(private mailService: MailService) {}

  @Post('send')
  sendMail(@Body() request: MailSendRequest) {
    // console.log(request);

    return this.mailService.sendMail(request);
  }
}
