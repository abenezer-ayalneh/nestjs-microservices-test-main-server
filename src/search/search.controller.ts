import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { catchError } from 'rxjs';
import { RpcExceptionType } from 'src/custom/types/rpc-exception.type';
import { SearchByNameRequest } from './requests/search.request';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(
    private searchService: SearchService,
    private i18n: I18nService,
  ) {}

  @Get()
  searchByName(@Query() searchRequest: SearchByNameRequest) {
    return this.searchService.searchByName(searchRequest).pipe(
      catchError((caughtError: RpcExceptionType) => {
        throw new HttpException(
          this.i18n.t(caughtError.message),
          caughtError.statusCode,
        );
      }),
    );
  }
}
