import { createGlobalStyle } from "styled-components";
import "../fonts/font.css";

export const GlobalStyle = createGlobalStyle`
  *{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NotoSans-VariableFont_wdth,wght';
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }


`;
