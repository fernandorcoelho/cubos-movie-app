import React from 'react';

import { Text } from './styles';

interface FeedbackTextProps {
  children: React.ReactNode;
}

const FeedbackText: React.FC<FeedbackTextProps> = ({ children }) => {
  return <Text>{children}</Text>;
};

export default FeedbackText;
