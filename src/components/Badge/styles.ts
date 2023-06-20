import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  border-radius: 50px;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.deepBlue};
`;

export const Text = styled.h4`
  color: ${({ theme }) => theme.colors.deepBlue};
`;
