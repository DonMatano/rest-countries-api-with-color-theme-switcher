import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 2rem;
  background-color: ${(props) => props.theme.elementColor};
  padding: 1em 2em;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 0.5rem;
  gap: 2rem;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    margin: 4rem 1rem 1rem 4rem;
    width: 40%
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
`;
const SearchIcon = styled.i`
  color: hsla(0, 0%, 52%, 1);
`;

const CountrySearchInput = (): JSX.Element => (
  <SearchWrapper>
    <SearchIcon
      className="fa-solid fa-magnifying-glass"
    />
    <SearchInput placeholder="Search for a country..." />
  </SearchWrapper>
);

export default CountrySearchInput;
