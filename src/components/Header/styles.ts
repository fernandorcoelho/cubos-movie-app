import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  min-height: 70px;
  height: 70px;
  margin-bottom: 60px;

  background-color: ${({ theme }) => theme.colors.deepBlue};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.turquoise};
  font-weight: 100;
`;
