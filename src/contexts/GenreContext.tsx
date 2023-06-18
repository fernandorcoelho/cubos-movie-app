import React, { createContext, useEffect, useState } from 'react';

import { GenreProps, GenresReponseDTO } from 'interfaces/genresResponseDTO';
import { api } from 'services/api/axiosClient';

interface GenreContextProps {
  genres: GenreProps[];
  loading: boolean;
  error: string;
}

interface GenreProviderProps {
  children: React.ReactNode;
}

export const GenreContext = createContext({} as GenreContextProps);

export const GenreProvider: React.FC<GenreProviderProps> = ({ children }) => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getGenreList = async () => {
    setLoading(true);
    try {
      const { genres }: GenresReponseDTO = await api.get('/genre/movie/list');
      setGenres(genres);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <GenreContext.Provider
      value={{
        genres,
        loading,
        error,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
};
