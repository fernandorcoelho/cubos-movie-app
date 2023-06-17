import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MovieDetailPage from 'pages/MovieDetailPage';
import MoviesPage from 'pages/MoviesPage';
// import MovieDetailPage from 'pages/MovieDetailPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route index path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
