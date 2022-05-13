import { Dependencies } from '../Dependencies';
import Country, { Regions } from '../types/Country';

const timeOfLastUpdateKey = 'timeOfLastUpdate';

const countryListLocalStorageKey = 'countryList';

export class CountriesRepository {
  public async getAllCountries(): Promise<Country[]> {
    if (this.isLastUpdateLessThanThreeDaysAgo()) {
      const countries = this.getCountriesFromLocalStorage();
      if (countries.length) return countries;
    }
    const countries = await Dependencies
      .getInstance()
      .countrySearchService
      .getAllCountries();
    const countriesInString = JSON.stringify(countries);
    const timeString = Date.now().toString();
    Dependencies.getInstance()
      .localStorageService
      .setItem(countryListLocalStorageKey, countriesInString);
    Dependencies.getInstance()
      .localStorageService
      .setItem(timeOfLastUpdateKey, timeString);
    return countries;
  }

  public async getCountryByName(searchName: string) : Promise<Country[]> {
    const countries = await this.getAllCountries();
    return countries.filter(({ name }) => name.toLowerCase().includes(searchName.toLowerCase()));
  }

  public async getCountryByCode(searchCode: string) : Promise<Country | undefined> {
    const countries = await this.getAllCountries();
    return countries.find(({ code }) => searchCode.toLowerCase() === code.toLowerCase());
  }

  public async getCountryByRegion(searchRegion: Regions) : Promise<Country[]> {
    const countries = await this.getAllCountries();
    return countries.filter(({ region }) => searchRegion === region);
  }

  protected isLastUpdateLessThanThreeDaysAgo(): boolean {
    const threeDaysInMilliseconds = 259200000;
    const timeOfLastUpdateString = Dependencies
      .getInstance()
      .localStorageService
      .getItem<string>(timeOfLastUpdateKey);
    if (!timeOfLastUpdateString) return false;
    const timeOfLastUpdate = Number(timeOfLastUpdateString);
    const currentDate = Date.now();
    const diff = currentDate - timeOfLastUpdate;
    return diff < threeDaysInMilliseconds;
  }

  protected getCountriesFromLocalStorage(): Country[] {
    const countries = Dependencies
      .getInstance()
      .localStorageService
      .getItem<Country[]>(countryListLocalStorageKey);
    return countries || [];
  }
}
