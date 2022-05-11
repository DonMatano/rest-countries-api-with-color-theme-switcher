import React from 'react';
import styled from 'styled-components';
import CountryListItem from './CountryListItem';
import { device } from '../styles/mediaQueries';

const List = styled.ul`
  padding: 2rem 4rem;
  display: grid;
  gap: 5rem;
  width: 100%;
  
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    padding: 3rem 4rem;
    justify-content: center;
  }
`;

const CountryList = (): JSX.Element => (
  <List>
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
    <CountryListItem />
  </List>
);

export default CountryList;
