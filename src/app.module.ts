import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH",
        transport: Transport.TCP,
        options:{
          port: 3001
        }
      }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
