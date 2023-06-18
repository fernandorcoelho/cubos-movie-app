import styled from 'styled-components';

export const Text = styled.span`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray.text};
`;
