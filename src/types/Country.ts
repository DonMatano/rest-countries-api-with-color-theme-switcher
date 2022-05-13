/* eslint-disable no-unused-vars */
type Country = {
  code: string,
  name: string,
  nativeName: string[] | undefined,
  population: number,
  region: string,
  subRegion: string,
  topLevelDomain: string,
  capital: string[],
  currencies: string[],
  languages: string[],
  borders: string[],
  flagSVG: string,
  flagPNG: string,
}

export type BorderCountry = {
  code: string,
  name: string,
}

// export type Regions = 'Africa' | 'Europe' | 'Americas' | 'Asia' | 'Oceania';
export enum Regions {
  Africa = 'Africa',
  Europe = 'Europe',
  Americas = 'Americas',
  Asia = 'Asia',
  Oceania = 'Oceania'
}

export default Country;
