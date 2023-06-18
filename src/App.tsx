import React from 'react';

import Header from 'components/Header';
import { GenreProvider } from 'contexts/GenreContext';
import { MovieProvider } from 'contexts/MoviesContext';
import Router from 'router/Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GenreProvider>
        <MovieProvider>
          <Header />
          <Router />
          <GlobalStyle />
        </MovieProvider>
      </GenreProvider>
    </ThemeProvider>
  );
};

export default App;
