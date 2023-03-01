import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  CreateRoleRequest,
  DeleteRoleRequest,
  DeleteUserRequest,
  StoreUserRequest,
  UpdateRoleRequest,
  UpdateUserRequest,
} from '../custom/requests/user.request';

interface UserGrpcService {
  storeUser(data: StoreUserRequest): Observable<any>;
  updateUser(data: UpdateUserRequest): Observable<any>;
  deleteUser(data: DeleteUserRequest): Observable<any>;
  createRole(data: CreateRoleRequest): Observable<any>;
  updateRole(data: UpdateRoleRequest): Observable<any>;
  deleteRole(data: DeleteRoleRequest): Observable<any>;
}
@Injectable()
export class UserService implements OnModuleInit {
  private userGrpcService: UserGrpcService;

  constructor(@Inject('USER_CLIENT') private userClient: ClientGrpc) {}

  onModuleInit() {
    this.userGrpcService =
      this.userClient.getService<UserGrpcService>('UserGrpcService');
  }

  // Access Routes
  createRole(request: CreateRoleRequest) {
    return this.userGrpcService.createRole(request);
  }

  updateRole(request: UpdateRoleRequest) {
    return this.userGrpcService.updateRole(request);
  }

  deleteRole(request: DeleteRoleRequest) {
    return this.userGrpcService.deleteRole(request);
  }

  // User services
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
