import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  AddConfigurationRequest,
  GetConfigurationRequest,
} from '../custom/requests/configuration.request';

interface ConfigGrpcService {
  addConfigurationEntry(data: { name: string; value: string }): Observable<any>;
  getConfigurationEntry(data: {
    name: string;
    lang: string;
    applicationId: number;
  }): Observable<any>;
  addApplicationEntry(data: { name: string; value: string }): Observable<any>;
}
@Injectable()
export class ConfigurationService implements OnModuleInit {
  private configGrpcService: ConfigGrpcService;

  constructor(@Inject('CONFIG_CLIENT') private configClient: ClientGrpc) {}

  onModuleInit() {
    this.configGrpcService =
      this.configClient.getService<ConfigGrpcService>('ConfigGrpcService');
  }

  addConfigurationEntry(request: AddConfigurationRequest) {
    return this.configGrpcService.addConfigurationEntry(request);
  }

  getConfigurationEntry(request: GetConfigurationRequest) {
    return this.configGrpcService.getConfigurationEntry(request);
  }

  addApplicationEntry(request: AddConfigurationRequest) {
    return this.configGrpcService.addApplicationEntry(request);
  }
}
