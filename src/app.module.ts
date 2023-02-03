import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { GlobalModule } from './global/global.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      // To be able to use the '.env' file
      isGlobal: true, // To make it available to all modules (globally)
    }),
    // For rate limiting purposes
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL'), // The time-to-live in seconds
        limit: config.get('THROTTLE_LIMIT'), // The number of trials in the ttl range
      }),
    }),
    UserModule,
    AuthModule,
    ConfigurationModule,
    GlobalModule,
  ],
  providers: [
    {
      provide: APP_GUARD, // to bind the throttle guard globally,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
