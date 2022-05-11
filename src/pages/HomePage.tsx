import React from 'react';
import styled from 'styled-components';
import CountrySearchInput from '../components/CountrySearchInput';
import CountryRegionDropDown from '../components/CountryRegionDropdown';
import CountryList from '../components/CountryList';
import { device } from '../styles/mediaQueries';

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

const HomePageComponent = () : JSX.Element => (
  <HomePage>
    <FilterSection>
      <CountrySearchInput />
      <CountryRegionDropDown />
    </FilterSection>
    <CountryList />
  </HomePage>
);

export default HomePageComponent;
