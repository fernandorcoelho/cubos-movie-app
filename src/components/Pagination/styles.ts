import styled from 'styled-components';

interface PageButtonProps {
  isCurrentPage?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 40px 0;
`;

export const PageButtonWrapper = styled.div<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  border: ${({ theme, isCurrentPage }) =>
    `2px solid ${isCurrentPage ? theme.colors.turquoise : 'transparent'}`};
`;

export const PageButtonText = styled.span<PageButtonProps>`
  color: ${({ theme, isCurrentPage }) =>
    `${isCurrentPage ? theme.colors.turquoise : theme.colors.deepBlue}`};
  font-size: 1.6rem;
  font-weight: 100;
  transition: color 0.2s;
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: transparent;
  transition: background-color 0.2s, color 0.2s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.deepBlue};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.deepBlue};
  }

  &:not(:disabled):hover ${PageButtonText} {
    color: ${({ theme }) => theme.colors.turquoise};
  }
`;
