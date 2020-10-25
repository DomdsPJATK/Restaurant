import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    color: #1a5cb0;
    font-size: 1.1vw;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  input {
    font-family: 'Poppins', sans-serif;
    border: none;
    font-size: 1.1vw;
    color: white;
  }
  
`;