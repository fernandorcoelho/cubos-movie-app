import styled from 'styled-components';

interface ImageProps {
  src: string;
}

export const MovieCardContainer = styled.button`
  width: 100%;
  background-color: transparent;
  margin-top: 40px;
  text-align: left;
  font-size: 1rem;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
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

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

export const ImageNotFoundText = styled.span`
  font-size: 1.4rem;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const Header = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;

  padding-left: 110px;
  padding-right: 20px;
  padding-top: 20px;

  width: 100%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.deepBlue};
`;

export const Title = styled.h2`
  font-weight: 100;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.turquoise};

  @media screen and (min-width: 2000px) {
    font-size: 3.4rem;
  }
`;

export const VoteAverageContainer = styled.div`
  position: absolute;
  left: 25px;
  top: 50%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 75px;
  height: 75px;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.deepBlue};
`;

export const VoteAverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 77px;
  height: 77px;

  border-radius: 100%;
  border: ${({ theme }) => `4px solid ${theme.colors.turquoise}`};
`;

export const VoteAverageText = styled.h2`
  font-weight: 100;
  color: ${({ theme }) => theme.colors.turquoise};
`;

export const DetailsContainer = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 40px 30px 60px;
  background-color: ${({ theme }) => theme.colors.gray.grayBackground};
`;

export const Date = styled.p`
  position: absolute;
  top: 5px;
  left: 110px;
  z-index: 1;

  font-weight: 400;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray.darkGray};
`;

export const Overview = styled.p`
  margin: 28px auto;
  font-weight: 700;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray.mediumGray};

  @media screen and (min-width: 1440px) {
    margin: auto;
  }

  @media screen and (min-width: 2000px) {
    font-size: 1.4rem;
  }
`;

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: auto;

  @media screen and (max-width: 992px) {
    margin-top: 20px;
  }
`;
