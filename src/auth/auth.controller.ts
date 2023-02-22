import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { GrpcToHttpInterceptor } from 'nestjs-grpc-exceptions';
import { I18nService } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { GrpcCodeToHttpMap } from 'src/custom/maps/grpc-code-to-http.map';
import { GrpcExceptionType } from 'src/custom/types/grpc-exception.type';
import { RpcExceptionType } from 'src/custom/types/rpc-exception.type';
import { AuthService } from './auth.service';
import { ForgetPasswordRequest, SignInWithEmailRequest } from './requests';
import {
  ConfirmOtpRequest,
  ResetPasswordRequest,
} from './requests/forget-password.request';
import { SignUpWithEmailRequest } from './requests/sign-with-email.request';
import { SignUpWithPhoneNumberRequest } from './requests/sign-with-phone-number.request';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private i18n: I18nService) {}

  // Auth with Email
  @Post('signup/email')
  async signUpWithEmail(@Body() signUpRequest: SignUpWithEmailRequest) {
    return this.authService.signUpWithEmail(signUpRequest).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message, { lang: signUpRequest.lang }),
          caughtError.statusCode,
        );
      }),
    );
  }

  @Post('signin/email')
  @UseInterceptors(GrpcToHttpInterceptor)
  signInWithEmail(@Body() signInRequest: SignInWithEmailRequest) {
    return this.authService.signInWithEmail(signInRequest).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: signInRequest.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  // Auth with Phone Number
  @Post('signup/phone')
  async signUpWithPhoneNumber(@Body() request: SignUpWithPhoneNumberRequest) {
    return this.authService.signUpWithPhoneNumber(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  // Forget password
  @Post('forget')
  async forgetPassword(@Body() request: ForgetPasswordRequest) {
    return this.authService.forgetPassword(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('confirm')
  async confirmOtp(@Body() request: ConfirmOtpRequest) {
    return this.authService.confirmOtp(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @HttpCode(HttpStatus.OK)
  @Post('password/reset')
  async resetPassword(@Body() request: ResetPasswordRequest) {
    return this.authService.resetPassword(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }
}
