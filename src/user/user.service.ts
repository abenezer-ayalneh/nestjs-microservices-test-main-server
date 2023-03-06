import { Metadata } from '@grpc/grpc-js';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  DeleteUserRequest,
  StoreUserRequest,
  UpdateUserRequest,
  UpdateRoleRequest,
  CreateRoleRequest,
  DeleteRoleRequest,
  UpdatePermissionRequest,
  CreatePermissionRequest,
  DeletePermissionRequest,
  AssignPermissionsToRoleRequest,
  AssignRolesToUserRequest,
  AssignPermissionsToUserRequest,
  UserHasPermissionsRequest,
  GetUserRolesRequest,
  GetUserPermissionsRequest,
  RevokeRolesFromUserRequest,
  RevokePermissionsFromUserRequest,
  GetUsersViaRolesRequest,
  GetUsersViaPermissionsRequest,
} from '../custom/requests/user.request';

interface UserGrpcService {
  storeUser(data: StoreUserRequest): Observable<any>;
  updateUser(data: UpdateUserRequest): Observable<any>;
  deleteUser(data: DeleteUserRequest): Observable<any>;
  createRole(data: CreateRoleRequest, metadata: Metadata): Observable<any>;
  updateRole(data: UpdateRoleRequest): Observable<any>;
  deleteRole(data: DeleteRoleRequest): Observable<any>;
  getRoles(data: object): Observable<any>;
  getUserRoles(data: GetUserRolesRequest): Observable<any>;
  createPermission(data: CreatePermissionRequest): Observable<any>;
  updatePermission(data: UpdatePermissionRequest): Observable<any>;
  deletePermission(data: DeletePermissionRequest): Observable<any>;
  getPermissions(data: object): Observable<any>;
  assignPermissionsToRole(
    data: AssignPermissionsToRoleRequest,
  ): Observable<any>;
  assignRolesToUser(data: AssignRolesToUserRequest): Observable<any>;
  assignPermissionsToUser(
    data: AssignPermissionsToUserRequest,
  ): Observable<any>;
  userHasPermissions(data: UserHasPermissionsRequest): Observable<any>;
  getUserPermissions(data: GetUserPermissionsRequest): Observable<any>;
  revokeRolesFromUser(data: RevokeRolesFromUserRequest): Observable<any>;
  revokePermissionsFromUser(
    data: RevokePermissionsFromUserRequest,
  ): Observable<any>;
  getUsersViaRoles(data: GetUsersViaRolesRequest): Observable<any>;
  getUsersViaPermissions(data: GetUsersViaPermissionsRequest): Observable<any>;
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

  // Roles
  getUsersViaRoles(request: GetUsersViaRolesRequest) {
    return this.userGrpcService.getUsersViaRoles(request);
  }

  revokeRolesFromUser(request: RevokeRolesFromUserRequest) {
    return this.userGrpcService.revokeRolesFromUser(request);
  }

  assignRolesToUser(request: AssignRolesToUserRequest) {
    return this.userGrpcService.assignRolesToUser(request);
  }

  assignPermissionsToRole(request: AssignPermissionsToRoleRequest) {
    return this.userGrpcService.assignPermissionsToRole(request);
  }

  createRole(request: CreateRoleRequest) {
    const metadata = new Metadata();
    metadata.add('lang', 'am');
    return this.userGrpcService.createRole(request, metadata);
  }

  updateRole(request: UpdateRoleRequest) {
    return this.userGrpcService.updateRole(request);
  }

  deleteRole(request: DeleteRoleRequest) {
    return this.userGrpcService.deleteRole(request);
  }

  getRoles() {
    return this.userGrpcService.getRoles({});
  }

  getUserRoles(request: GetUserRolesRequest) {
    return this.userGrpcService.getUserRoles(request);
  }

  // Permission
  revokePermissionsFromUser(request: RevokePermissionsFromUserRequest) {
    return this.userGrpcService.revokePermissionsFromUser(request);
  }

  assignPermissionsToUser(request: AssignPermissionsToUserRequest) {
    return this.userGrpcService.assignPermissionsToUser(request);
  }

  createPermission(request: CreatePermissionRequest) {
    return this.userGrpcService.createPermission(request);
  }

  updatePermission(request: UpdatePermissionRequest) {
    return this.userGrpcService.updatePermission(request);
  }

  deletePermission(request: DeletePermissionRequest) {
    return this.userGrpcService.deletePermission(request);
  }

  getPermissions() {
    return this.userGrpcService.getPermissions({});
  }

  getUserPermissions(request: GetUserPermissionsRequest) {
    return this.userGrpcService.getUserPermissions(request);
  }

  userHasPermissions(request: UserHasPermissionsRequest) {
    return this.userGrpcService.userHasPermissions(request);
  }

  getUsersViaPermissions(request: GetUsersViaPermissionsRequest) {
    return this.userGrpcService.getUsersViaPermissions(request);
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
