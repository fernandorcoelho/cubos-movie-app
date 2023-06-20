import React from 'react';
import { useNavigate } from 'react-router-dom';

import Badge from 'components/Badge';
import { MovieProps } from 'interfaces/moviesResponseDTO';
import { formatDate } from 'utils/formatDate';
import { getPosterSrc } from 'utils/getPosterSrc';
import { getVoteAveragePercentage } from 'utils/getVoteAveragePercentage';

import * as S from './styles';

const IMAGE_WIDTH = 500;

const MovieCard: React.FC<MovieProps> = ({
  id,
  genres,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
}: MovieProps) => {
  const navigate = useNavigate();

  const goToMovieDetailsPage = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <S.MovieCardContainer onClick={goToMovieDetailsPage}>
      <S.Container>
        {!!poster_path ? (
          <S.Image src={getPosterSrc(IMAGE_WIDTH, poster_path)} />
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
                  {vote_average ? getVoteAveragePercentage(vote_average) : '-%'}
                </S.VoteAverageText>
              </S.VoteAverageWrapper>
            </S.VoteAverageContainer>
          </S.Header>

          <S.DetailsContainer>
            <S.Date>{!!release_date ? formatDate(release_date) : '--/--/----'}</S.Date>

            <S.Overview>{!!overview ? overview : 'Sinópse não encontrada'}</S.Overview>

            <S.BadgesContainer>
              {genres ? (
                genres.map((genre, index) => <Badge key={index}>{genre}</Badge>)
              ) : (
                <Badge>Gênero(s) não encontrado(s)</Badge>
              )}
            </S.BadgesContainer>
          </S.DetailsContainer>
        </S.ContentContainer>
      </S.Container>
    </S.MovieCardContainer>
  );
};

export default MovieCard;
