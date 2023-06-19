import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 1em;
  }

  #root {
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, input {
    font-family: 'Abel', sans-serif;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    user-select: none;
  }

  li {
    list-style-type: none;
  }

  @media screen and (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media screen and (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export default GlobalStyle;
