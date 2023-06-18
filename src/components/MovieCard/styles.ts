import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 40px;
`;

export const Image = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
  width: 300px;
`;

export const ImageNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 350px;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.gray.bg};
`;

export const ImageNotFoundText = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray.text};
  font-weight: bold;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;

  display: flex;
  align-items: flex-end;
  padding-left: 110px;

  width: 100%;
  min-height: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: 100;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.secondary};
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
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const VoteAverageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  border-radius: 100%;
  border: ${({ theme }) => `4px solid ${theme.colors.secondary}`};
`;

export const VoteAverageText = styled.h2`
  font-weight: 100;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DetailsContainer = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 60px 30px 40px;
  line-height: 140%;
  background-color: ${({ theme }) => theme.colors.gray.bg};
`;

export const Date = styled.p`
  position: absolute;
  top: 5px;
  left: 110px;
  z-index: 1;

  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray.date};
`;

export const Overview = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray.text};
`;

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 25px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  border-radius: 50px;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
  `}
`;

export const BadgeText = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
`;
