import { Controller, Get, Req, Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { UserService } from './user.service';
import { Request } from 'express';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Req() request: Request) {
    return this.userService.me(request);
  }
}
