import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { StoreUserRequest } from './requests/user.request';

interface UserGrpcService {
  storeUser(data: { email: string; password: string }): Observable<any>;
}
@Injectable()
export class UserService implements OnModuleInit {
  private userGrpcService: UserGrpcService;

  constructor(@Inject('USER_CLIENT') private userClient: ClientGrpc) {}

  onModuleInit() {
    this.userGrpcService =
      this.userClient.getService<UserGrpcService>('UserGrpcService');
  }

  storeUser(request: StoreUserRequest) {
    return this.userGrpcService.storeUser(request);
  }
}
