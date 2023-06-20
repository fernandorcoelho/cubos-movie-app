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

export const Text = styled.span`
  font-family: 'Abel', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.deepBlue};

  @media screen and (min-width: 2000px) {
    font-size: 1.4rem;
  }
`;
