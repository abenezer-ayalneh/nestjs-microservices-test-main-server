import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards';
import { ConfigurationService } from './configuration.service';

@Controller('configuration')
export class ConfigurationController {
  constructor(private configurationService: ConfigurationService) {}

  @UseGuards(JwtAuthGuard)
  @Get('hello')
  hello() {
    return this.configurationService.hello();
  }
}
