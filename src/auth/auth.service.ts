import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  ForgetPasswordRequest,
  SignInWithEmailRequest,
  SignUpWithEmailRequest,
  ConfirmOtpRequest,
  ResetPasswordRequest,
  SignUpWithPhoneNumberRequest,
} from '../custom/requests/auth.request';

interface AuthGrpcService {
  signUpWithEmail(data: SignUpWithEmailRequest): Observable<any>;
  signInWithEmail(data: SignInWithEmailRequest): Observable<any>;
  signUpWithPhoneNumber(data: SignUpWithPhoneNumberRequest): Observable<any>;
  forgetPassword(data: ForgetPasswordRequest): Observable<any>;
  confirmOtp(data: ConfirmOtpRequest): Observable<any>;
  resetPassword(data: ResetPasswordRequest): Observable<any>;
}

@Injectable()
export class AuthService implements OnModuleInit {
  private authGrpcService: AuthGrpcService;

  constructor(@Inject('AUTH_CLIENT') private authClient: ClientGrpc) {}

  onModuleInit() {
    this.authGrpcService =
      this.authClient.getService<AuthGrpcService>('AuthGrpcService');
  }

  // Auth with Email
  signUpWithEmail(signUpRequest: SignUpWithEmailRequest) {
    return this.authGrpcService.signUpWithEmail(signUpRequest);
  }

  signInWithEmail(signInRequest: SignInWithEmailRequest) {
    return this.authGrpcService.signInWithEmail(signInRequest);
  }

  // Auth with Phone Number
  signUpWithPhoneNumber(signUpRequest: SignUpWithPhoneNumberRequest) {
    return this.authGrpcService.signUpWithPhoneNumber(signUpRequest);
  }

  // Forget password
  forgetPassword(request: ForgetPasswordRequest) {
    return this.authGrpcService.forgetPassword(request);
  }

  confirmOtp(request: ConfirmOtpRequest) {
    return this.authGrpcService.confirmOtp(request);
  }

  resetPassword(request: ResetPasswordRequest) {
    return this.authGrpcService.resetPassword(request);
  }
}
