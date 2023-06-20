import styled, { css } from 'styled-components';

interface ImageProps {
  src: string;
}

export const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
  width: 100%;
`;

export const ContentConatiner = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 40px 20px;

  width: 100%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.gray.grayBackground};
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.deepBlue};
`;

export const ReleaseDate = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray.darkGray};

  padding-left: 20px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.gray.extraLightGray};

  padding: 40px 20px 20px 50px;

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

export const SectionContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionTitle = styled.section`
  font-size: 1.6rem;
  font-weight: 400;
  padding-bottom: 12px;

  ${({ theme }) => css`
    color: ${theme.colors.deepBlue};
    border-bottom: 2px solid ${theme.colors.lightTurquoise};
  `}
`;

export const Overview = styled.p`
  font-weight: 700;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray.mediumGray};
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.8em;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TableHeaderCell = styled.div`
  color: ${({ theme }) => theme.colors.deepBlue};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;

export const TableCell = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableItem = styled.div`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray.mediumGray};

  @media screen and (max-width: 800px) {
    text-align: left;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: baseline;
    gap: 20px;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const VoteAverageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.deepBlue};
`;

export const VoteAverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 112px;
  height: 112px;

  border-radius: 100%;
  border: ${({ theme }) => `4px solid ${theme.colors.turquoise}`};
`;

export const VoteAverageText = styled.h2`
  font-size: 2.4rem;
  font-weight: 100;
  color: ${({ theme }) => theme.colors.turquoise};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const Image = styled.img<ImageProps>`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ImageNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.skyBlue};
  height: 200px;

  @media screen and (min-width: 1024px) {
    width: 40%;
    height: auto;
  }
`;

export const ImageNotFoundText = styled.span`
  font-size: 1.4rem;
  text-align: center;
  color: white;
  font-weight: bold;
`;
