import { Global, Module } from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';

@Global()
@Module({
  imports: [ConfigurationModule],
  exports: [ConfigurationModule],
})
export class GlobalModule {}
