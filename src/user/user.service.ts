import { Body, HttpException, Inject, Injectable, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { catchError } from 'rxjs';
import { GetUser } from 'src/auth/decorator';
import { RpcExceptionType } from 'src/custom/types/rpc-exception.type';

@Injectable()
export class UserService {
  constructor(
    @Inject('AUTH_CLIENT') private readonly authClient: ClientProxy,
  ) {}

  me(@Req() request: Request) {
    return request.user;
  }
}
