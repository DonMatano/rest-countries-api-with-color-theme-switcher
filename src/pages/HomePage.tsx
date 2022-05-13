import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CountrySearchInput from '../components/CountrySearchInput';
import CountryRegionDropDown from '../components/CountryRegionDropdown';
import CountryList from '../components/CountryList';
import { device } from '../styles/mediaQueries';
import Country, { Regions } from '../types/Country';
import { CountriesRepository } from '../Repositories/CountriesRepository';

const HomePage = styled.main`
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;
const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HomePageComponent = () : JSX.Element => {
  const [countryList, setCountryList] = useState<Country[]>([]);
  const [region, setRegion] = useState<Regions | ''>('');
  const [searchName, setSearchName] = useState('');
  const countryRepository = new CountriesRepository();
  const fetchCountries = async () : Promise<void> => {
    const newCountryList = await countryRepository.getAllCountries();
    setCountryList(newCountryList);
  };
  const getCountryOfRegion = async (regionToSearch: Regions): Promise<void> => {
    const countriesInTheRegion = await countryRepository.getCountryByRegion(regionToSearch);
    setCountryList(countriesInTheRegion);
  };

  const getCountryOfName = async (nameToSearch: string): Promise<void> => {
    const countriesOfName = await countryRepository.getCountryByName(nameToSearch);
    setCountryList(countriesOfName);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    region ? getCountryOfRegion(region) : fetchCountries();
  }, [region]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    searchName ? getCountryOfName(searchName) : fetchCountries();
  }, [searchName]);

  return (
    <HomePage>
      <FilterSection>
        <CountrySearchInput searchName={searchName} setSearchName={setSearchName} />
        <CountryRegionDropDown region={region} setRegion={setRegion} />
      </FilterSection>
      <CountryList countryList={countryList} />
    </HomePage>
  );
};

export default HomePageComponent;
