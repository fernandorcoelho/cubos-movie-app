import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetailsPage from 'pages/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route index path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
