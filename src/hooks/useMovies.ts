import { useContext } from 'react';

import { MovieContext } from 'contexts/MoviesContext';

export const useMovies = () => useContext(MovieContext);
