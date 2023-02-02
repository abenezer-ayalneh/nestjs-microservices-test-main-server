import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ConfigurationService {
  constructor(
    @Inject('CONFIG_CLIENT') private readonly configClient: ClientProxy,
  ) {}

  hello() {
    return this.configClient.send({ cmd: 'hello' }, {});
  }
}
