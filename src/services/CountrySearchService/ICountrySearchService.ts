import Country from '../../types/Country';

export interface ICountrySearchService {
  // eslint-disable-next-line no-unused-vars
  getCountryByCode(code: string): Promise<Country | undefined>;
  // eslint-disable-next-line no-unused-vars
  getCountryByName(name: string): Promise<Country[] | undefined>;
  getAllCountries(): Promise<Country[]>;
}
