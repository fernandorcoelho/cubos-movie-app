import React from 'react';

import { MovieProps } from 'interfaces/moviesResponseDTO';
import { formatDate } from 'utils/formatDate';

import * as S from './styles';

const IMAGE_WIDTH = 500;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w';

const MovieCard: React.FC<MovieProps> = ({
  id,
  genres,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}: MovieProps) => {
  const imageSrc = `${IMAGE_PATH}${IMAGE_WIDTH}${poster_path}`;
  const vonteAveragePercentage = Math.round(vote_average * 10);

  return (
    <S.Container>
      {!!poster_path ? (
        <S.Image src={imageSrc} />
      ) : (
        <S.ImageNotFound>
          <S.ImageNotFoundText>Imagem não encontrada</S.ImageNotFoundText>
        </S.ImageNotFound>
      )}

      <S.ContentContainer>
        <S.Header>
          <S.Title>{title ?? 'Título não encontrado'}</S.Title>

          <S.VoteAverageContainer>
            <S.VoteAverageWrapper>
              <S.VoteAverageText>
                {vonteAveragePercentage ? `${vonteAveragePercentage}%` : '-'}
              </S.VoteAverageText>
            </S.VoteAverageWrapper>
          </S.VoteAverageContainer>
        </S.Header>

        <S.DetailsContainer>
          <S.Date>{release_date ? formatDate(release_date) : 'Data não encontrada'}</S.Date>

          <S.Overview>{!!overview ? overview : 'Sinópse não encontrada'}</S.Overview>

          <S.BadgesContainer>
            {genres.map((genre) => (
              <S.Badge key={genre}>
                <S.BadgeText>{genre}</S.BadgeText>
              </S.Badge>
            ))}
          </S.BadgesContainer>
        </S.DetailsContainer>
      </S.ContentContainer>
    </S.Container>
  );
};

export default MovieCard;
