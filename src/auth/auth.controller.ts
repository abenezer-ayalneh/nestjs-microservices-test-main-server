import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { RpcExceptionType } from 'src/custom/types/rpc-exception.type';
import { AuthService } from './auth.service';
import { SignInWithEmailRequest } from './requests';
import { SignUpWithEmailRequest } from './requests/sign-up-with-email.request';
import { SignUpWithPhoneNumberRequest } from './requests/sign-up-with-phone-number.request';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private i18n: I18nService) {}

  // Auth with Email
  @Post('signup/email')
  async signUpWithEmail(@Body() signUpRequest: SignUpWithEmailRequest) {
    return this.authService.signUpWithEmail(signUpRequest).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message),
          caughtError.statusCode,
        );
      }),
    );
  }

  @Post('signin/email')
  signInWithEmail(@Body() signInRequest: SignInWithEmailRequest) {
    return this.authService.signInWithEmail(signInRequest).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message),
          caughtError.statusCode,
        );
      }),
    );
  }

  // Auth with Phone Number
  @Post('signup/phone')
  async signUpWithPhoneNumber(@Body() request: SignUpWithPhoneNumberRequest) {
    return this.authService.signUpWithPhoneNumber(request).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message),
          caughtError.statusCode,
        );
      }),
    );
  }
}
