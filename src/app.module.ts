import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { I18nModule, QueryResolver } from 'nestjs-i18n';
import * as path from 'path';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { GlobalModule } from './global/global.module';
import { SearchModule } from './search/search.module';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { MicroserviceErrorInterceptor } from './custom/interceptors/microservice-error.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      // To be able to use the '.env' file
      isGlobal: true, // To make it available to all modules (globally)
    }),
    // For Localization
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/custom/i18n/'),
        watch: true,
      },
      resolvers: [new QueryResolver(['lang'])],
    }),
    // For rate limiting purposes
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get<number>('THROTTLE_TTL'), // The time-to-live in seconds
        limit: config.get<number>('THROTTLE_LIMIT'), // The number of trials in the ttl range
      }),
    }),
    UserModule,
    AuthModule,
    ConfigurationModule,
    GlobalModule,
    SearchModule,
    MailModule,
  ],
  providers: [
    {
      provide: APP_GUARD, // to bind the throttle guard globally,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
