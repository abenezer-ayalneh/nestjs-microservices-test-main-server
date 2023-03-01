import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { GrpcCodeToHttpMap } from 'src/custom/maps/grpc-code-to-http.map';
import { GrpcExceptionType } from 'src/custom/types/grpc-exception.type';
import { MailService } from './mail.service';
import { MailSendRequest } from '../custom/requests/mail.request';

@Controller('mail')
// @UseGuards(JwtAuthGuard)
export class MailController {
  constructor(private mailService: MailService, private i18n: I18nService) {}

  @Post('send')
  sendMail(@Body() request: MailSendRequest) {
    return this.mailService.sendMail(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }
}
