import React from 'react';

import { useMovies } from 'hooks/useMovies';

import { Container, PageButton } from './styles';

const Pagination = () => {
  const { page: currentPage, setPage: setCurrentPage, totalPages } = useMovies();

  const handlePageChange = (e, newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      e.target.scrollIntoView();
    }
  };

  return (
    <Container>
      <PageButton
        disabled={currentPage === 1}
        onClick={(e) => handlePageChange(e, currentPage - 1)}
      >
        Previous
      </PageButton>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <PageButton
        disabled={currentPage === totalPages}
        onClick={(e) => handlePageChange(e, currentPage + 1)}
      >
        Next
      </PageButton>
    </Container>
  );
};

export default Pagination;
