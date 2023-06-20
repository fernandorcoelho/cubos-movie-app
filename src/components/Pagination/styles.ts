import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const PageButtonText = styled.span`
  color: white;
  font-weight: bold;
  letter-spacing: 1.4px;
  font-size: 1.1rem;
  text-decoration: none;
`;

export const PageButton = styled.button`
  background-color: ${({ theme }) => theme.colors.deepBlue};
  font-family: 'Abel', sans-serif;

  padding: 15px 20px;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  transition-duration: 0.4s;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    opacity: 0.9;
  }
`;
