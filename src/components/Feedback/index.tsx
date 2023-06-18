import React from 'react';

import FeedbackText from 'components/FeedbackText';

import { Container } from './styles';

interface FeedbackProps {
  children: React.ReactNode;
}

const Feedback: React.FC<FeedbackProps> = ({ children }) => {
  return (
    <Container>
      <FeedbackText>{children}</FeedbackText>
    </Container>
  );
};

export default Feedback;
