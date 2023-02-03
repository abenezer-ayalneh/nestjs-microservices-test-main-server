import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { ConfigurationService } from './configuration.service';
import { AddApplicationRequest } from './requests/application.request';
import {
  AddConfigurationRequest,
  GetConfigurationRequest,
} from './requests/configuration.request';

@UseGuards(JwtAuthGuard)
@Controller()
export class ConfigurationController {
  constructor(private configurationService: ConfigurationService) {}

  @Post('configuration/add')
  addConfigurationEntry(@Body() request: AddConfigurationRequest) {
    return this.configurationService.addConfigurationEntry(request);
  }

  @Get('configuration/get')
  getConfigurationEntry(@Query() request: GetConfigurationRequest) {
    return this.configurationService.getConfigurationEntry(request);
  }

  @Post('application/add')
  addApplicationEntry(@Body() request: AddApplicationRequest) {
    return this.configurationService.addApplicationEntry(request);
  }

  // @Get('application/get')
  // getApplicationEntry(@Query() request: GetApplicationRequest) {
  //   return this.configurationService.getApplicationEntry(request);
  // }
}
