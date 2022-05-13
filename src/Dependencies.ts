import { IHttpService } from './services/HttpService/IHttpService';
import { FetchHttpService } from './services/HttpService/FetchHttpService';
import { ICountrySearchService } from './services/CountrySearchService/ICountrySearchService';
import { RestCountryApiService } from './services/CountrySearchService/RestCountryApiService';
import { ILocalStorageService } from './services/LocalStorageService/ILocalStorageService';
// eslint-disable-next-line max-len
import { WindowLocalStorageService } from './services/LocalStorageService/WindowLocalStorageService';

export class Dependencies {
  private static instance: Dependencies;

  httpService: IHttpService;

  countrySearchService: ICountrySearchService;

  localStorageService: ILocalStorageService;

  private constructor() {
    this.httpService = new FetchHttpService();
    this.countrySearchService = new RestCountryApiService();
    this.localStorageService = new WindowLocalStorageService();
  }

  public static getInstance(): Dependencies {
    if (!Dependencies.instance) {
      Dependencies.instance = new Dependencies();
    }
    return Dependencies.instance;
  }

  public static setHttpService(newHttpService: IHttpService): void {
    this.getInstance().httpService = newHttpService;
  }
  
  public static setCountrySearchService(newCountrySearchService: ICountrySearchService): void {
    this.getInstance().countrySearchService = newCountrySearchService;
  }

  public static setLocalStorageService(newLocalStorageService: ILocalStorageService): void {
    this.getInstance().localStorageService = newLocalStorageService;
  }
}
