import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  SignInWithEmailRequest,
  SignUpWithEmailRequest,
  SignUpWithPhoneNumberRequest
} from './requests';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_CLIENT') private readonly authClient: ClientProxy,
  ) {}

  // Test
  exceptionTest() {
    return this.authClient.send({ cmd: 'exceptionTest' }, {});
  }

  // Auth with Email
  signUpWithEmail(signUpRequest: SignUpWithEmailRequest) {
    return this.authClient.send(
      { cmd: 'userSignUpWithEmail' },
      { email: signUpRequest.email, password: signUpRequest.password },
    );
  }

  signInWithEmail(signInRequest: SignInWithEmailRequest) {
    return this.authClient.send(
      { cmd: 'userSignInWithEmail' },
      { email: signInRequest.email, password: signInRequest.password },
    );
  }

  // Auth with Phone Number
  signUpWithPhoneNumber(signUpRequest: SignUpWithPhoneNumberRequest) {
    // console.log(this.authClient);

    return this.authClient.send(
      { cmd: 'userSignUpWithPhoneNumber' },
      {
        phoneNumber: signUpRequest.phoneNumber,
        accessToken: signUpRequest.accessToken,
      },
    );
  }
}
