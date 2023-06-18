import { useContext } from 'react';

import { GenreContext } from 'contexts/GenreContext';

export const useGenres = () => useContext(GenreContext);
