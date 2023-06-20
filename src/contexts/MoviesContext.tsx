import React, { createContext, useCallback, useEffect, useState } from 'react';

import { useGenres } from 'hooks/useGenres';
import {
  DisplayedMoviesProps,
  MovieProps,
  MovieResultsProps,
  MoviesResponseDTO,
} from 'interfaces/moviesResponseDTO';
import { api } from 'services/api/axiosClient';

interface MovieContextProps {
  displayedMovies: MovieProps[];
  loading: boolean;
  error: string;
  searchMovies(query: string): Promise<void>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalResults: number;
}

interface MovieProviderProps {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

const RESULTS_PER_PAGE = 5;

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [allMovies, setAllMovies] = useState<MovieProps[]>([]);
  const [displayedMovies, setDisplayedMovies] = useState<DisplayedMoviesProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState<number>(0);

  const { genres } = useGenres();

  const mapResults = (results: MovieResultsProps[]) => {
    return results.map((movie: MovieResultsProps) => {
      const genreNames = movie.genre_ids?.map(
        (id: number) => genres.find((genre) => genre.id === id)?.name,
      );

      return { ...movie, genres: genreNames };
    });
  };

  const updateWithGenres = () => {
    const genreIdsArray = displayedMovies
      .filter((movie) => movie.genres.includes(query))
      .map((movie) => movie.genre_ids);

    const genreIds = [].concat(...genreIdsArray).join(',');
    return genreIds;
  };

  const fetchMovies = async () => {
    setLoading(true);
    setError('');

    let endpoint = '/discover';

    if (query) {
      endpoint = '/search';
    }

    const withGenres = updateWithGenres();

    try {
      const { results, total_results }: MoviesResponseDTO = await api.get(`${endpoint}/movie`, {
        params: {
          query,
          page,
          with_genres: withGenres,
          primary_release_year: parseInt(query),
        },
      });

      const numberOfPages = Math.ceil(results.length / RESULTS_PER_PAGE);

      setAllMovies(mapResults(results));
      setTotalPages(numberOfPages);
      setTotalResults(total_results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (genres.length > 0) {
      fetchMovies();
    }
  }, [query, genres]);

  useEffect(() => {
    const start = (page - 1) * RESULTS_PER_PAGE;
    const end = start + RESULTS_PER_PAGE;
    setDisplayedMovies(allMovies.slice(start, end));

    updateWithGenres();
  }, [allMovies, page]);

  const searchMovies = async (searchQuery: string) => {
    setPage(1);
    setQuery(searchQuery);
    await fetchMovies();
  };

  return (
    <MovieContext.Provider
      value={{
        displayedMovies,
        loading,
        error,
        searchMovies,
        page,
        setPage,
        totalPages,
        totalResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
