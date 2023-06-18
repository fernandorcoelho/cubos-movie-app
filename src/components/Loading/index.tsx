import React from 'react';

import FeedbackText from 'components/FeedbackText';

import { Container, Spinner } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <FeedbackText>Carregando...</FeedbackText>
      <Spinner />
    </Container>
  );
};

export default Loading;
