import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  background-color: ${(props) => props.theme.elementColor};
  border-radius: 0.5rem;
`;

const FlagImage = styled.img`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  aspect-ratio: 16/9;
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

const CountryListItem = () : JSX.Element => (
  <ListItem>
    <FlagImage src="https://flagcdn.com/ke.svg" alt="kenya flag" />
    <CountryDetails>
      <CountryTitle>Kenya</CountryTitle>
      <ValueTitle>
        Population:
        <Value>53,771,300</Value>
      </ValueTitle>
      <ValueTitle>
        Region:
        <Value>Africa</Value>
      </ValueTitle>
      <ValueTitle>
        Capital:
        <Value>Nairobi</Value>
      </ValueTitle>
    </CountryDetails>
  </ListItem>
);

export default CountryListItem;
