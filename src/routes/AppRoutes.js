import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutUsPage from '../pages/AboutUsPage';
import ProductsPage from '../pages/ProductsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutUsPage />} />
      <Route path='/products' element={<ProductsPage />} />
    </Routes>
  );
};

export default AppRoutes;