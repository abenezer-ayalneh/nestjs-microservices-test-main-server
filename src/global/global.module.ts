import { Global, Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';

// This module is used to import and re-export modules
// so that they could be access globally.
@Global()
@Module({
  imports: [ConfigurationModule],
  exports: [ConfigurationModule],
})
export class GlobalModule {}
