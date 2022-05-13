import React from 'react';
import styled from 'styled-components';
import { Themes } from '../types/Enums';

const ToggleButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

type ThemeToggleProps = {
  currentTheme: Themes,
  toggleTheme: () => void,
}

const ThemeToggle = ({ currentTheme, toggleTheme } : ThemeToggleProps) : JSX.Element => (
  <ToggleButton onClick={toggleTheme}>
    <i className="fa-solid fa-moon" style={{ marginRight: '1rem' }} />
    { currentTheme === Themes.light ? 'Dark Mode' : 'Light Mode' }
  </ToggleButton>
);

export default ThemeToggle;
