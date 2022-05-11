import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';

// noinspection CssUnknownProperty
const Wrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  
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
    max-width: 45%;
    max-height: 40rem;
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
  &:hover {
    cursor: pointer;
  }
`;
const BorderCountryLink = styled.a`
`;

const CountryDetails = () : JSX.Element => (
  <Wrapper>
    <FlagImage src="https://flagcdn.com/ke.svg" alt="kenya flag" />
    <DetailsSide>
      <CountryTitle>Kenya</CountryTitle>
      <CountryDetailsWrapper>
        <CountryDetailSection>
          <CountryDetailParagraph>
            Native Name:
            <CountryDetailValue>Kenya</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Population:
            <CountryDetailValue>53,771,300</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Region:
            <CountryDetailValue>Africa</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Sub Region:
            <CountryDetailValue>Eastern Africa</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Capital:
            <CountryDetailValue>Nairobi</CountryDetailValue>
          </CountryDetailParagraph>
        </CountryDetailSection>
        <CountryDetailSection>
          <CountryDetailParagraph>
            Top Level Domain:
            <CountryDetailValue>.ke</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Currencies:
            <CountryDetailValue>Kenyan shilling</CountryDetailValue>
          </CountryDetailParagraph>
          <CountryDetailParagraph>
            Languages:
            <CountryDetailValue>English, Swahili</CountryDetailValue>
          </CountryDetailParagraph>
        </CountryDetailSection>
      </CountryDetailsWrapper>
      <BorderCountriesWrapper>
        <BorderCountryHeader>Border Countries:</BorderCountryHeader>
        <BorderCountriesList>
          <BorderCountriesListItem>
            <BorderCountryLink href="#">Ethiopia</BorderCountryLink>
          </BorderCountriesListItem>
          <BorderCountriesListItem>
            <BorderCountryLink href="#">Somalia</BorderCountryLink>
          </BorderCountriesListItem>
          <BorderCountriesListItem>
            <BorderCountryLink href="#">South Sudan</BorderCountryLink>
          </BorderCountriesListItem>
          <BorderCountriesListItem>
            <BorderCountryLink href="#">Tanzania</BorderCountryLink>
          </BorderCountriesListItem>
          <BorderCountriesListItem>
            <BorderCountryLink href="#">Uganda</BorderCountryLink>
          </BorderCountriesListItem>
        </BorderCountriesList>
      </BorderCountriesWrapper>
    </DetailsSide>

  </Wrapper>
);

export default CountryDetails;
