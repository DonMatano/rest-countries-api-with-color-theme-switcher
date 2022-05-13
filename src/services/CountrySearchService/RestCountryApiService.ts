import { ICountrySearchService } from './ICountrySearchService';
import { Dependencies } from '../../Dependencies';
import Country from '../../types/Country';
import {
  currencyType, nativeType, RestCountry, RestCountryApiResponse, 
} from '../../types/RestCountryApiResponse';

export class RestCountryApiService implements ICountrySearchService {
  async getAllCountries(): Promise<Country[]> {
    let countryList: Country[] = [];
    const apiURL = 'https://restcountries.com/v3.1/all';
    try {
      const response = await Dependencies
        .getInstance()
        .httpService
        .getHttpRequest<RestCountryApiResponse>(apiURL);
      countryList = response.map((data) => this.createCountryFromData(data));
      return countryList;
    } catch (e) {
      throw new Error(`Error getting all countries ${e}`);
    }
  }

  async getCountryByCode(code: string): Promise<Country | undefined> {
    const apiURL = `https://restcountries.com/v3.1/alpha/${code}`;
    try {
      const response = await Dependencies
        .getInstance()
        .httpService
        .getHttpRequest<RestCountryApiResponse>(apiURL);
      if (response.length) {
        return this.createCountryFromData(response[0]);
      }
      return undefined;
    } catch (e) {
      throw new Error(`Error getting country of code: ${code}: ${e}`);
    }
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  getCountryByName(name: string): Promise<Country[] | undefined> {
    return Promise.resolve(undefined);
  }

  private createCountryFromData(data: RestCountry): Country {
    return {
      name: data.name.common,
      code: data.cca3,
      capital: data.capital || [],
      flagSVG: data.flags.svg,
      flagPNG: data.flags.png,
      nativeName: data.name.nativeName && Object.keys(data.name.nativeName).map((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { common } = data.name.nativeName[key] as nativeType;
        return common;
      }),
      population: data.population,
      region: data.region,
      subRegion: data.subregion || '',
      topLevelDomain: data.tld ? data.tld[0] : '',
      currencies: data.currencies ? Object.keys(data.currencies).map((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { name } = data.currencies[key] as currencyType;
        return name;
      }) : [],
      languages: data.languages ? Object.keys(data.languages).map((key) => 
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
        // eslint-disable-next-line implicit-arrow-linebreak
        data.languages[key] as string) : [],
      borders: data.borders || [],
    };
  }
}
