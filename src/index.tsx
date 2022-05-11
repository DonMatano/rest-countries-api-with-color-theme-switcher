import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './reset.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { lightTheme, darkTheme } from './styles/mytheme';
import { GlobalStyles } from './styles/globalStyles';
import App from './App';
import Navigation from './components/Navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Navigation />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
