import React from 'react';
import styled from 'styled-components';
import CountryDetails from '../components/CountryDetails';
import { device } from '../styles/mediaQueries';

const CountryDetailsWrapper = styled.div`
  padding: 3rem;
`;
const BackButton = styled.button`
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.293139);
  padding: 0.5em 1.5em;
  font-weight: 300;
  line-height: 2rem;
  text-align: center;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.elementColor};
  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

const CountryDetailsPage = () : JSX.Element => (
  <CountryDetailsWrapper>
    <BackButton> &larr; Back </BackButton>
    <CountryDetails />
  </CountryDetailsWrapper>
);

export default CountryDetailsPage;
