import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 40px;
`;

export const Text = styled.span`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gray.text};
`;
