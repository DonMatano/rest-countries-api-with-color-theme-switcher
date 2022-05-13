import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Country from '../types/Country';
import { addCommasToNumber, formatListOfWords } from '../helpers/formatters';

const ListItem = styled.li`
  background-color: ${(props) => props.theme.elementColor};
  border-radius: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const FlagImage = styled.img`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  aspect-ratio: 16/9;
  min-width: 100%;
  //border-bottom: ${(props) => props.theme.imageBottomBorder};
`;

const CountryDetails = styled.div`
  padding: 2rem 3rem 3rem 3rem;
`;

const CountryTitle = styled.h2`
  margin: 1rem 0;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 2.6rem;
`;

const ValueTitle = styled.p`
  margin-bottom: 0.8rem;
  font-weight: 600;
  line-height: 1.6rem;
`;

const Value = styled.span`
  margin-left: 0.5rem;
  font-weight: 300;
`;

type CountryListItemProps = {
  country: Country
}

const CountryListItem = ({ country }: CountryListItemProps) : JSX.Element => (
  <ListItem>
    <Link to={`/country/${country.code}`}>
      <FlagImage
        src={country.flagPNG}
        alt={`${country.name} flag`}
        loading="lazy"
      />
      <CountryDetails>
        <CountryTitle>{country.name}</CountryTitle>
        <ValueTitle>
          Population:
          <Value>{addCommasToNumber(country.population)}</Value>
        </ValueTitle>
        <ValueTitle>
          Region:
          <Value>{country.region}</Value>
        </ValueTitle>
        <ValueTitle>
          Capital:
          <Value>{formatListOfWords(country.capital)}</Value>
        </ValueTitle>
      </CountryDetails>
    </Link>
  </ListItem>
);

export default CountryListItem;
