import { Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    @Inject('AUTH_CLIENT') private readonly authClient: ClientProxy,
  ) {}

  me() {
    try {
      return this.authClient.send({ cmd: 'me' }, {});
    } catch (exception) {
      console.log('exception exception exception exception');
    }
  }
}
