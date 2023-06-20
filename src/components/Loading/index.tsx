import React from 'react';

import FeedbackText from 'components/FeedbackText';

import { Container, Spinner } from './styles';

interface LoadingProps {
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
  return (
    <Container>
      <FeedbackText>{children ?? 'Carregando...'}</FeedbackText>
      <Spinner />
    </Container>
  );
};

export default Loading;
