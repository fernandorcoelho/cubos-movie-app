import React from 'react';

import { MovieDetailsResponseDTO } from 'interfaces/movieDetailsResponseDTO';
import { formatCurrency } from 'utils/formatCurrency';
import { formatDate } from 'utils/formatDate';
import { formatTime } from 'utils/formatTime';
import { getLanguage } from 'utils/getLanguage';
import { getPosterSrc } from 'utils/getPosterSrc';
import { getStatus } from 'utils/getStatus';
import { getVideoSrc } from 'utils/getVideoSrc';

import * as S from './styles';

const IMAGE_WIDTH = 500;

const MovieDetails: React.FC<MovieDetailsResponseDTO> = ({
  title,
  release_date,
  overview,
  status,
  original_language,
  runtime,
  budget,
  revenue,
  genres,
  poster_path,
  vote_average,
  videos,
}: MovieDetailsResponseDTO) => {
  return <S.Conatiner></S.Conatiner>;
};

export default MovieDetails;
