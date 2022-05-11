import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';

const Select = styled.select`
  margin: 1rem 2rem;
  background-color: ${(props) => props.theme.elementColor};
  padding: 1em 2em;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 0.5rem;
  width: 50%;
  @media ${device.tablet} {
    width: 20%;
    margin: 4rem 4rem 1rem 1rem;
    padding: 1em 2em;
  }
`;
const Option = styled.option`
  color: ${(props) => props.theme.textColor};
`;

const CountryRegionDropDown = (): JSX.Element => (
  <Select value="">
    <Option value="" disabled>Filter By Region</Option>
    <Option value="africa" disabled>Africa</Option>
    <Option value="america" disabled>America</Option>
    <Option value="asia" disabled>Asia</Option>
    <Option value="europe" disabled>Europe</Option>
    <Option value="oceania" disabled>Oceania</Option>
  </Select>
);

export default CountryRegionDropDown;
