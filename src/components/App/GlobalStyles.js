import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: .3s;
  }
  .fade-exit {
    opacity: 0;
  }
`;

export default GlobalStyle;
