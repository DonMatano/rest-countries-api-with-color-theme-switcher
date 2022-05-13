import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../styles/mediaQueries';
import ThemeToggle from './ThemeToggle';
import { Themes } from '../types/Enums';

const StyledNavigation = styled.nav`
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0562443);
  background-color: ${(props) => props.theme.elementColor};
  @media ${device.tablet} {
    padding: 3rem 4.5rem;
  }
`;
const Header = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  &:hover {
    cursor: pointer;
  }
  @media ${device.tablet} {
    font-size: 2.4rem;
    line-height: 3.3rem;
  }
`;

type NavigationProps = {
  currentTheme: Themes,
  toggleTheme: () => void,
};

const Navigation = ({ currentTheme, toggleTheme } : NavigationProps) : JSX.Element => (
  <StyledNavigation>
    <Link to="/">
      <Header>
        Where in the world?
      </Header>
    </Link>
    <ThemeToggle toggleTheme={toggleTheme} currentTheme={currentTheme} />
  </StyledNavigation>
);

export default Navigation;
