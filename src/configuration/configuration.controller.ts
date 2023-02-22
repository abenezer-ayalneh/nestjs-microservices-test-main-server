import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards';
import { RpcExceptionType } from 'src/custom/types/rpc-exception.type';
import { ConfigurationService } from './configuration.service';
import { AddApplicationRequest } from './requests/application.request';
import {
  AddConfigurationRequest,
  GetConfigurationRequest,
} from './requests/configuration.request';

@UseGuards(JwtAuthGuard)
@Controller()
export class ConfigurationController {
  constructor(
    private configurationService: ConfigurationService,
    private i18n: I18nService,
  ) {}

  @Post('configuration/add')
  addConfigurationEntry(@Body() request: AddConfigurationRequest) {
    return this.configurationService.addConfigurationEntry(request).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message),
          caughtError.statusCode,
        );
      }),
    );
  }

  @Get('configuration/get')
  getConfigurationEntry(@Query() request: GetConfigurationRequest) {
    return this.configurationService.getConfigurationEntry(request).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message, { lang: request.lang }),
          caughtError.statusCode,
        );
      }),
    );
  }

  @Post('application/add')
  addApplicationEntry(@Body() request: AddApplicationRequest) {
    return this.configurationService.addApplicationEntry(request).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message),
          caughtError.statusCode,
        );
      }),
    );
  }

  // @Get('application/get')
  // getApplicationEntry(@Query() request: GetApplicationRequest) {
  //   return this.configurationService.getApplicationEntry(request);
  // }
}
