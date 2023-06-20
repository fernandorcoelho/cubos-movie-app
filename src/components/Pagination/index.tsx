import React from 'react';

import { useMovies } from 'hooks/useMovies';

import { Container, PageButton, PageButtonText, PageButtonWrapper } from './styles';

const Pagination = () => {
  const { page: currentPage, setPage: setCurrentPage, totalPages } = useMovies();

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <Container>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <PageButton
          key={pageNum}
          disabled={currentPage === pageNum}
          onClick={() => handlePageChange(pageNum)}
        >
          <PageButtonWrapper isCurrentPage={currentPage === pageNum}>
            <PageButtonText isCurrentPage={currentPage === pageNum}>{pageNum}</PageButtonText>
          </PageButtonWrapper>
        </PageButton>
      ))}
    </Container>
  );
};

export default Pagination;
