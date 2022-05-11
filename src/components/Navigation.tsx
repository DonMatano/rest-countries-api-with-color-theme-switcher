import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/mediaQueries';

const StyledNavigation = styled.nav`
  padding: 3rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${(props) => props.theme.elementColor};
  @media ${device.tablet} {
    padding: 3rem 4.5rem;
  }
`;
const Header = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  @media ${device.tablet} {
    font-size: 2.4rem;
    line-height: 3.3rem;
  }
`;

const Navigation = () : JSX.Element => (
  <StyledNavigation>
    <Header>Where in the world?</Header>
  </StyledNavigation>
);

export default Navigation;
