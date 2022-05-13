import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { darkTheme, lightTheme } from './styles/mytheme';
import { GlobalStyles } from './styles/globalStyles';
import App from './App';
import Navigation from './components/Navigation';
import { Dependencies } from './Dependencies';
import { Themes } from './types/Enums';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const RootComponent = () : JSX.Element => {
  const [theme, setTheme] = useState<Themes>(Themes.light);
  const localStorage = Dependencies.getInstance().localStorageService;
  const toggleTheme = (): void => {
    const newTheme = theme === Themes.light ? Themes.dark : Themes.light;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme as string);
  };
  useEffect(() => {
    const themeGotten = localStorage.getItem<string>('theme');
    if (!themeGotten) {
      setTheme(Themes.light);
    } else {
      setTheme(Themes[themeGotten as Themes]);
    }
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation currentTheme={theme} toggleTheme={toggleTheme} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
