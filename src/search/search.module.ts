import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEARCH_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3003,
        },
      },
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
