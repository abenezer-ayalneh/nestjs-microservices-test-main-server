import {
  CallHandler,
  ExecutionContext,
  HttpException,
  NestInterceptor,
} from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { catchError, Observable, throwError } from 'rxjs';
import { GrpcCodeToHttpMap } from '../maps/grpc-code-to-http.map';
import { GrpcExceptionType } from '../types/grpc-exception.type';

interface LanguageRequest {
  lang: string;
}

export class MicroserviceErrorInterceptor implements NestInterceptor {
  // constructor(private i18n: I18nService) {}
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = _context.switchToHttp().getRequest<LanguageRequest>();
    console.log(request);

    return next.handle();
    // return next.handle().pipe(
    //   catchError((caughtError) => {
    //     if (caughtError instanceof GrpcExceptionType) {
    //       throw new HttpException(
    //         this.i18n.t(caughtError.details, { lang: request.lang }),
    //         GrpcCodeToHttpMap[caughtError.code],
    //       );
    //     } else {
    //       return throwError(() => caughtError);
    //     }
    //   }),
    // );
  }
}
