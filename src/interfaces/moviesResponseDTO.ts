export interface BaseMovieProps {
  id: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MovieProps extends BaseMovieProps {
  genres?: string[];
}

export interface MovieResultsProps extends BaseMovieProps {
  genre_ids?: number[];
}

export interface DisplayedMoviesProps extends BaseMovieProps {
  genre_ids?: number[];
  genres?: string[];
}

export interface MoviesResponseDTO {
  results: MovieResultsProps[];
  page: number;
  total_pages: number;
  total_results: number;
}
