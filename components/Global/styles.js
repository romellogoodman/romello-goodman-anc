import {css} from 'styled-components';

export const globalCSS = css`
  * {
    vertical-align: baseline;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
  }

  *:focus {
    outline: none;
  }

  body {
    margin: auto;
    max-width: 1000px;
    font-size: 18px;
  }
`;

export const theme = {};
