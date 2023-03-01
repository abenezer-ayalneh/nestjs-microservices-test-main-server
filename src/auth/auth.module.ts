import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../custom/strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    ClientsModule.register([
      {
        name: 'AUTH_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, '../custom/proto/auth.proto'),
          url: '0.0.0.0:5001',
        },
      },
    ]),
    // ClientsModule.register([
    //   {
    //     name: 'AUTH_CLIENT',
    //     transport: Transport.TCP,
    //     options: {
    //       port: 3001,
    //     },
    //   },
    // ]),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],
})
export class AuthModule {}
