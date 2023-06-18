export interface GenreProps {
  id?: number;
  name: string;
}

export interface GenresReponseDTO {
  genres: GenreProps[];
}
