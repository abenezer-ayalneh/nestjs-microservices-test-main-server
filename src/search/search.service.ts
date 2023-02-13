import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SearchByNameRequest } from './requests/search.request';

@Injectable()
export class SearchService {
  constructor(
    @Inject('SEARCH_CLIENT') private readonly searchClient: ClientProxy,
  ) {}

  searchByName(searchRequest: SearchByNameRequest) {
    return this.searchClient.send({ cmd: 'searchByName' }, searchRequest);
  }
}
