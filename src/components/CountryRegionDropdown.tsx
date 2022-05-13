import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';
import { Regions } from '../types/Country';

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

type CountryRegionDropDownProps = {
  region: string,
  setRegion: React.Dispatch<React.SetStateAction<'' | Regions>>;
}

const CountryRegionDropDown = ({ region, setRegion } : CountryRegionDropDownProps): JSX.Element => (
  <Select
    value={region}
    onChange={(event) => setRegion(event.target.value as Regions)}
  >
    <Option value="">Filter By Region</Option>
    <Option value={Regions.Africa}>Africa</Option>
    <Option value={Regions.Americas}>America</Option>
    <Option value={Regions.Asia}>Asia</Option>
    <Option value={Regions.Europe}>Europe</Option>
    <Option value={Regions.Oceania}>Oceania</Option>
  </Select>
);

export default CountryRegionDropDown;
