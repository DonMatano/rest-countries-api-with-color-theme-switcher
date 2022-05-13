import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import CountryDetails from '../components/CountryDetails';
import { device } from '../styles/mediaQueries';
import Country, { BorderCountry } from '../types/Country';
import { CountriesRepository } from '../Repositories/CountriesRepository';

const CountryDetailsWrapper = styled.div`
  padding: 3rem;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const BackButton = styled.button`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.293139);
  padding: 0.5em 1.5em;
  font-weight: 300;
  line-height: 2rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.elementColor};
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

const CountryDetailsPage = () : JSX.Element => {
  const countriesRepository = new CountriesRepository();
  const params = useParams();
  const [codeParams] = useState(params.code as string);
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [borderCountries, setBorderCountries] = useState<BorderCountry[]>([]);
  const getCountryByCode = async (code: string): Promise<Country | undefined> => (
    countriesRepository.getCountryByCode(code)
  );
  const setBoundaryCountriesOfCountry = async ():Promise<void> => {
    if (!country) {
      setBorderCountries([]);
      return;
    }
    const countriesPromises = country
      .borders.map((countryCode) => countriesRepository.getCountryByCode(countryCode));
    const results = await Promise.all(countriesPromises);
    const definedCountries = results.filter((resCountry) => resCountry !== undefined) as Country[];
    const borderCountryList: BorderCountry[] = definedCountries.map(
      ({ code, name }) => ({ code, name }),
    );
    setBorderCountries(borderCountryList);
  };
  const getCountry = async (): Promise<void> => {
    const gottenCountry = await getCountryByCode(codeParams);
    setCountry(gottenCountry);
  };
  useEffect(() => {
    getCountry();
  }, [codeParams]);
  useEffect(() => {
    setBoundaryCountriesOfCountry();
  }, [country?.borders]);
  return (
    <CountryDetailsWrapper>
      <Link to="/">
        <BackButton> &larr; Back </BackButton>
      </Link>
      {country && <CountryDetails country={country} borderCountries={borderCountries} />}
    </CountryDetailsWrapper>
  ); 
};

export default CountryDetailsPage;
