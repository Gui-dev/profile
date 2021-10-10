import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray-900: #141414;
    --gray-700: #1D1D1D;
    --gray-400: #909090;
    --gray-100: #E5E5E5;
    --white: #FFF;
    --yellow-500: #FFF447;
    --green-500: #3EB595;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    background-color: var(--gray-900);
    scroll-behavior: smooth;
  }
`
