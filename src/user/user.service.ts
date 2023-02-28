import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  DeleteUserRequest,
  StoreUserRequest,
  UpdateUserRequest,
} from './requests/user.request';

interface UserGrpcService {
  storeUser(data: StoreUserRequest): Observable<any>;
  updateUser(data: UpdateUserRequest): Observable<any>;
  deleteUser(data: DeleteUserRequest): Observable<any>;
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

  updateUser(request: UpdateUserRequest) {
    return this.userGrpcService.updateUser(request);
  }

  deleteUser(request: DeleteUserRequest) {
    return this.userGrpcService.deleteUser(request);
  }
}
