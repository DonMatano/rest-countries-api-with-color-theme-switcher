import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import HomePageComponent from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

const Wrapper = styled.main`
  height: 100%;
`;

const App = (): JSX.Element => (
  <Wrapper>
    <Routes>
      <Route path="/" element={<HomePageComponent />} />
      <Route path="country/:code" element={<CountryDetailsPage />} />
    </Routes>
  </Wrapper>
);

export default App;
