import { GenreProps } from './genresResponseDTO';

interface VideoResultProps {
  key: string;
  site: string;
}

interface VideoResultsProps {
  results: VideoResultProps[];
}

export type StatusProps = 'Released' | 'In Production' | 'Post Production' | 'Canceled' | 'Rumored';

export interface MovieDetailsResponseDTO {
  title: string;
  overview: string;
  status: StatusProps;
  original_language: string;
  runtime: number;
  budget: number;
  revenue: number;
  genres: GenreProps[];
  poster_path: string;
  release_date: string;
  videos: VideoResultsProps;
  vote_average: number;
}
