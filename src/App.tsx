import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageComponent from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<HomePageComponent />} />
    <Route index element={<HomePageComponent />} />
    <Route path="/country" element={<CountryDetailsPage />} />
  </Routes>
);

export default App;
