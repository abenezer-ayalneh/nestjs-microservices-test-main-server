import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { I18nService, I18nValidationExceptionFilter } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { GrpcCodeToHttpMap } from 'src/custom/maps/grpc-code-to-http.map';
import { GrpcExceptionType } from 'src/custom/types/grpc-exception.type';
import {
  DeleteUserRequest,
  StoreUserRequest,
  UpdateUserRequest,
  CreateRoleRequest,
  UpdateRoleRequest,
  DeleteRoleRequest,
  CreatePermissionRequest,
  UpdatePermissionRequest,
  DeletePermissionRequest,
  AssignPermissionsToRoleRequest,
  AssignRolesToUserRequest,
  AssignPermissionsToUserRequest,
  GetUserRolesRequest,
  GetUserPermissionsRequest,
  RevokeRolesFromUserRequest,
  RevokePermissionsFromUserRequest,
  GetUsersViaRolesRequest,
  GetUsersViaPermissionsRequest,
} from '../custom/requests/user.request';
import { UserService } from './user.service';

@Controller('users')
// @UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService, private i18n: I18nService) {}

  // Role routes
  @Post('access/roles/revoke/user')
  revokeRolesFromUser(@Body() request: RevokeRolesFromUserRequest) {
    return this.userService.revokeRolesFromUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/roles/assign/user')
  assignRolesToUser(@Body() request: AssignRolesToUserRequest) {
    return this.userService.assignRolesToUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/roles/assign/permission')
  assignPermissionsToRole(@Body() request: AssignPermissionsToRoleRequest) {
    return this.userService.assignPermissionsToRole(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/roles/create')
  createRole(@Body() request: CreateRoleRequest) {
    return this.userService.createRole(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          caughtError.details,
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/roles/update')
  updateRole(@Body() request: UpdateRoleRequest) {
    return this.userService.updateRole(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/roles/delete')
  deleteRole(@Body() request: DeleteRoleRequest) {
    return this.userService.deleteRole(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Get('access/roles')
  getRoles(@Query() request: { lang: string }) {
    return this.userService.getRoles().pipe(
      catchError((caughtError: GrpcExceptionType) => {
        console.log(caughtError);
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Get('access/user/roles')
  getUserRoles(@Query() request: GetUserRolesRequest) {
    return this.userService.getUserRoles(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        console.log(caughtError);
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/users/via/roles')
  getUsersViaRoles(@Body() request: GetUsersViaRolesRequest) {
    return this.userService.getUsersViaRoles(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        console.log(caughtError);
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  // Permission routes
  @Post('access/permissions/revoke/user')
  revokePermissionsFromUser(@Body() request: RevokePermissionsFromUserRequest) {
    return this.userService.revokePermissionsFromUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/permissions/create')
  createPermission(@Body() request: CreatePermissionRequest) {
    return this.userService.createPermission(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/permissions/update')
  updatePermission(@Body() request: UpdatePermissionRequest) {
    return this.userService.updatePermission(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/permissions/delete')
  deletePermission(@Body() request: DeletePermissionRequest) {
    return this.userService.deletePermission(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Get('access/permissions')
  getPermissions(@Query() request: { lang: string }) {
    return this.userService.getPermissions().pipe(
      catchError((caughtError: GrpcExceptionType) => {
        console.log(caughtError);
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/permissions/assign/user')
  assignPermissionsToUser(@Body() request: AssignPermissionsToUserRequest) {
    return this.userService.assignPermissionsToUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/permissions/has')
  userHasPermissions(@Body() request: AssignPermissionsToUserRequest) {
    return this.userService.userHasPermissions(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Get('access/user/permissions')
  getUserPermissions(@Query() request: GetUserPermissionsRequest) {
    return this.userService.getUserPermissions(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        console.log(caughtError);
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('access/users/via/permissions')
  getUsersViaPermissions(@Body() request: GetUsersViaPermissionsRequest) {
    return this.userService.getUsersViaPermissions(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        console.log(caughtError);
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  // User routes
  @Post('store')
  storeUser(@Body() request: StoreUserRequest) {
    return this.userService.storeUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('update')
  updateUser(@Body() request: UpdateUserRequest) {
    return this.userService.updateUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }

  @Post('delete')
  deleteUser(@Body() request: DeleteUserRequest) {
    return this.userService.deleteUser(request).pipe(
      catchError((caughtError: GrpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.details, { lang: request.lang }),
          GrpcCodeToHttpMap[caughtError.code],
        );
      }),
    );
  }
}
