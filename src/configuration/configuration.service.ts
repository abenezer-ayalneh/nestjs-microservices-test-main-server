import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  AddConfigurationRequest,
  GetConfigurationRequest,
} from './requests/configuration.request';

@Injectable()
export class ConfigurationService {
  constructor(
    @Inject('CONFIG_CLIENT') private readonly configClient: ClientProxy,
  ) {}

  addConfigurationEntry(request: AddConfigurationRequest) {
    return this.configClient.send(
      { cmd: 'addConfigurationEntry' },
      { ...request },
    );
  }

  getConfigurationEntry(request: GetConfigurationRequest) {
    return this.configClient.send(
      { cmd: 'getConfigurationEntry' },
      { ...request },
    );
  }

  addApplicationEntry(request: AddConfigurationRequest) {
    return this.configClient.send(
      { cmd: 'addApplicationEntry' },
      { ...request },
    );
  }
}
