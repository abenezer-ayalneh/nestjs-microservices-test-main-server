import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  ClientProxyFactory,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // To be able to use the '.env' file
      isGlobal: true, // To make it available to all modules (globally)
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 5,
    }),
    UserModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD, // to bind the throttle guard globally,
      useClass: ThrottlerGuard,
    },
    // {
    //   provide: 'AUTH_CLIENT',
    //   useValue: ClientProxyFactory.create({
    //     transport: Transport.TCP,
    //     options: {
    //       port: 3001,
    //     },
    //   }),
    // },
  ],
})
export class AppModule {}
