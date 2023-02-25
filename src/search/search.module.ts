import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEARCH_CLIENT',
        transport: Transport.GRPC,
        options: {
          package: 'search',
          protoPath: join(__dirname, 'proto/search.proto'),
          url: '0.0.0.0:5003',
        },
      },
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
