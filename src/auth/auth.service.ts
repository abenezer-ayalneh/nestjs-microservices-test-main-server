import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { I18nService } from 'nestjs-i18n';
import { Observable } from 'rxjs';
import {
  SignInWithEmailRequest,
  SignUpWithEmailRequest,
  SignUpWithPhoneNumberRequest,
} from './requests';

interface AuthGrpcService {
  signUpWithEmail(data: { email: string; password: string }): Observable<any>;
  signInWithEmail(data: { email: string; password: string }): Observable<any>;
  signUpWithPhoneNumber(data: { accessToken: string }): Observable<any>;
}
@Injectable()
export class AuthService implements OnModuleInit {
  private authGrpcService: AuthGrpcService;

  constructor(
    @Inject('AUTH_CLIENT') private authClient: ClientGrpc,
    private i18n: I18nService,
  ) {}

  onModuleInit() {
    this.authGrpcService =
      this.authClient.getService<AuthGrpcService>('AuthGrpcService');
  }

  // Auth with Email
  signUpWithEmail(signUpRequest: SignUpWithEmailRequest) {
    return this.authGrpcService.signUpWithEmail({
      email: signUpRequest.email,
      password: signUpRequest.password,
    });
  }

  signInWithEmail(signInRequest: SignInWithEmailRequest) {
    return this.authGrpcService.signInWithEmail({
      email: signInRequest.email,
      password: signInRequest.password,
    });
  }

  // Auth with Phone Number
  signUpWithPhoneNumber(signUpRequest: SignUpWithPhoneNumberRequest) {
    return this.authGrpcService.signUpWithPhoneNumber({
      accessToken: signUpRequest.accessToken,
    });
  }
}
