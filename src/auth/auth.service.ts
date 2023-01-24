import { Body, Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, map, of } from 'rxjs';
import { SignInWithEmailRequest, SignUpWithEmailRequest, SignUpWithPhoneNumberRequest, } from './requests';

@Injectable()
export class AuthService {
    constructor(@Inject("AUTH_CLIENT") private readonly authClient: ClientProxy) { }

    // Auth with Email
    signUpWithEmail(signUpRequest: SignUpWithEmailRequest) {
        return this.authClient
            .send({ cmd: "userSignUpWithEmail" }, { email: signUpRequest.email, password: signUpRequest.password })
    }

    signInWithEmail(signInRequest: SignInWithEmailRequest) {
        return this.authClient
            .send({ cmd: "userSignInWithEmail" }, { email: signInRequest.email, password: signInRequest.password })
    }

    // Auth with Phone Number
    signUpWithPhoneNumber(signUpRequest: SignUpWithPhoneNumberRequest) {
        // console.log(this.authClient);

        return this.authClient
            .send({ cmd: "userSignUpWithPhoneNumber" }, { phoneNumber: signUpRequest.phoneNumber, accessToken: signUpRequest.accessToken })
        // .pipe(catchError((err) => of(err).pipe(map(e => console.log(e)))))
    }

    // signInWithPhoneNumber(signInRequest: SignInRequest) {
    //         return this.authClient
    //         .send({ cmd: "userSignInWithPhoneNumber" }, new SignInEvent(signInRequest.email, signInRequest.password))
    // }
}