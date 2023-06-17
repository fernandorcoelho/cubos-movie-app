// src/pages/MoviesPage.tsx
import React, { useEffect, useState } from 'react';

import { api } from '../services/api/axiosClient';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
};

const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await api.get('/search/movie');
        console.log(response);
        // setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>MoviesPage</div>;
};

export default MoviesPage;
