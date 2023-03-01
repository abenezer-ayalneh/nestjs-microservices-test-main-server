import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { SearchByNameRequest } from '../custom/requests/search.request';

interface SearchGrpcService {
  searchByName(data: SearchByNameRequest): Observable<any>;
}
@Injectable()
export class SearchService {
  private searchGrpcService: SearchGrpcService;

  constructor(@Inject('SEARCH_CLIENT') private client: ClientGrpc) {}

  onModuleInit() {
    this.searchGrpcService =
      this.client.getService<SearchGrpcService>('SearchGrpcService');
  }

  searchByName(searchRequest: SearchByNameRequest) {
    return this.searchGrpcService.searchByName(searchRequest);
  }
}
