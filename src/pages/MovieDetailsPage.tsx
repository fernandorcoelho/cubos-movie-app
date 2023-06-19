import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Feedback from 'components/Feedback';
import Loading from 'components/Loading';
import MovieDetails from 'components/MovieDetails';
import { MovieDetailsResponseDTO } from 'interfaces/movieDetailsResponseDTO';
import { api } from 'services/api/axiosClient';
import { Container } from 'styles/MovieDetailsPage';
import { formatCurrency } from 'utils/formatCurrency';
import { formatDate } from 'utils/formatDate';
import { formatTime } from 'utils/formatTime';
import { getLanguage } from 'utils/getLanguage';
import { getPosterSrc } from 'utils/getPosterSrc';
import { getStatus } from 'utils/getStatus';
import { getVideoSrc } from 'utils/getVideoSrc';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsResponseDTO>(
    {} as MovieDetailsResponseDTO,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // TODO
  // Se videos.results[0].site não for YouTube, retornar que vídeo não disponível

  const fetchMovieDetails = async () => {
    setLoading(true);
    try {
      const response: MovieDetailsResponseDTO = await api.get(`/movie/${id}`, {
        params: {
          append_to_response: 'videos',
          language: 'pt-BR',
        },
      });

      setMovieDetails(response);
      console.log(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  // console.log('duração:', formatTime(movieDetails?.runtime));
  // console.log('idioma:', getLanguage(movieDetails?.original_language));
  // console.log('situação:', getStatus(movieDetails?.status));
  // console.log('orçamento:', formatCurrency(movieDetails?.budget));
  // console.log('receita:', formatCurrency(movieDetails?.revenue));
  // console.log('lucro:', formatCurrency(movieDetails?.revenue - movieDetails?.budget));
  // console.log('video src:', getVideoSrc(movieDetails?.videos?.results[0].key));

  if (error) {
    return (
      <Container>
        {!(movieDetails && loading) && <Feedback>Nenhum filme foi encontrado</Feedback>}

        {loading ? (
          <Loading />
        ) : (
          <MovieDetails
            title={movieDetails?.title}
            release_date={movieDetails?.release_date}
            budget={movieDetails?.budget}
            genres={movieDetails?.genres}
            original_language={movieDetails?.original_language}
            overview={movieDetails?.overview}
            poster_path={movieDetails?.poster_path}
            revenue={movieDetails?.revenue}
            runtime={movieDetails?.runtime}
            status={movieDetails?.status}
            videos={movieDetails?.videos}
            vote_average={movieDetails?.vote_average}
          />
        )}
      </Container>
    );
  }

  return loading ? <Loading /> : <div></div>;
};

export default MovieDetailsPage;
