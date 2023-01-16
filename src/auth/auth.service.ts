import { Body, Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SignUpRequest } from './dto';
import { SignUpEvent } from './events/signup-event';

@Injectable()
export class AuthService {
    constructor(@Inject("AUTH") private readonly authClient: ClientProxy) { }

    signUp(signUpRequest: SignUpRequest) {
        return this.authClient.send({ cmd: "userSignUp" }, new SignUpEvent(signUpRequest.email, signUpRequest.password))
    }
}
