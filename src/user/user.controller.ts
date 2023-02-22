import { Body, Controller, Post } from '@nestjs/common';
import { StoreUserRequest } from './requests/user.request';
import { UserService } from './user.service';

@Controller('users')
// @UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Post('store')
  storeUser(@Body() request: StoreUserRequest) {
    return this.userService.storeUser(request);
  }
}
