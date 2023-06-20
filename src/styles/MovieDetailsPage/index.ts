import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 10%;

  @media screen and (max-width: 480px) {
    padding: 0 4%;
  }
`;
