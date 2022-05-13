import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../styles/mediaQueries';
import Country, { BorderCountry } from '../types/Country';
import { addCommasToNumber, formatListOfWords } from '../helpers/formatters';

// noinspection CssUnknownProperty
const Wrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  background-color: ${(props) => props.theme.backgroundColor};
  
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 10rem;
  }
`;

const FlagImage = styled.img`
  aspect-ratio: 14/10;
  border-radius: 0.6rem;
  @media ${device.tablet} {
    border-radius: 1rem;
    aspect-ratio: 14/10;
    width: 45%;
  }
`;
const CountryTitle = styled.h1`
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 3rem;
  @media ${device.tablet} {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`;

const DetailsSide = styled.div`
  @media ${device.tablet} {
    width: 50%;
    padding: 2rem;
  }
`;
const CountryDetailsWrapper = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media ${device.tablet} {
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
  }
`;
const CountryDetailSection = styled.div``;
const CountryDetailParagraph = styled.p`
  line-height: 3.2rem;
  font-weight: 600;
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;
const CountryDetailValue = styled.span`
  margin-left: 0.6rem;
  font-weight: 300;
`;

const BorderCountriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${device.tablet} {
    flex-direction: row;
    margin-top: 3rem;
  }
`;
const BorderCountryHeader = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
`;
const BorderCountriesList = styled.ul`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, max-content));
  gap: 2rem;
`;
const BorderCountriesListItem = styled.li`
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.104931);
  padding: 0.5em 1em;
  border-radius: 0.2rem;
  text-align: center;
  background-color: ${(props) => props.theme.elementColor};
  &:hover {
    cursor: pointer;
  }
`;

type CountryDetailsProps = {
  country: Country,
  borderCountries: BorderCountry[]
}

const CountryDetails = ({ country, borderCountries } : CountryDetailsProps) : JSX.Element => (
  <Wrapper>
    <FlagImage src={country.flagSVG} alt={`${country.name} flag`} />
    <DetailsSide>
      <CountryTitle>{country.name}</CountryTitle>
      <CountryDetailsWrapper>
        <CountryDetailSection>
          <CountryDetailParagraph>
            Native Name:
            {country.nativeName
              ? (
                <CountryDetailValue>
                  {formatListOfWords(country.nativeName)}
                </CountryDetailValue>
              )
              : <CountryDetailValue>N/A</CountryDetailValue>}
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Population:
            <CountryDetailValue>{addCommasToNumber(country.population)}</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Region:
            <CountryDetailValue>{country.region}</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Sub Region:
            <CountryDetailValue>{country.subRegion}</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Capital:
            <CountryDetailValue>{formatListOfWords(country.capital)}</CountryDetailValue>
          </CountryDetailParagraph>
        </CountryDetailSection>
        <CountryDetailSection>
          <CountryDetailParagraph>
            Top Level Domain:
            <CountryDetailValue>{country.topLevelDomain}</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Currencies:
            <CountryDetailValue>{formatListOfWords(country.currencies)}</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Languages:
            <CountryDetailValue>{formatListOfWords(country.languages)}</CountryDetailValue>
          </CountryDetailParagraph>
        </CountryDetailSection>
      </CountryDetailsWrapper>
      { borderCountries.length
        ? (
          <BorderCountriesWrapper>
            <BorderCountryHeader>Border Countries:</BorderCountryHeader>
            <BorderCountriesList>
              {
                  borderCountries.map((borderCountry) => (
                    <BorderCountriesListItem key={borderCountry.code}>
                      <Link 
                        reloadDocument
                        to={`/country/${borderCountry.code}`}
                      >
                        {borderCountry.name}
                      </Link>
                    </BorderCountriesListItem>
                  ))
                }
            </BorderCountriesList>
          </BorderCountriesWrapper>
        ) : null}
    </DetailsSide>

  </Wrapper>
);

export default CountryDetails;
