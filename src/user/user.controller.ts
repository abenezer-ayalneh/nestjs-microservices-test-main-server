import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { GrpcCodeToHttpMap } from 'src/custom/maps/grpc-code-to-http.map';
import { GrpcExceptionType } from 'src/custom/types/grpc-exception.type';
import {
  DeleteUserRequest,
  StoreUserRequest,
  UpdateUserRequest,
} from './requests/user.request';
import { UserService } from './user.service';

@Controller('users')
// @UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService, private i18n: I18nService) {}

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
