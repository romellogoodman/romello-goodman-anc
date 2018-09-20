import {css} from 'styled-components';

export const globalCSS = css`
  * {
    vertical-align: baseline;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-style: inherit;
    font-size: 100%;
  }

  *:focus {
    outline: none;
  }

  body {
    margin: auto;
    max-width: 1000px;
    font-size: 20px;
  }
`;

export const theme = {
  background: '#F5F8FA',
  primary: '#0057B8',
  primaryDark: '#000033',
  primaryLight: '#00A9E0',
  secondary: '#E4002B',
  secondaryDark: '#781818',
  tertiaryDark: '#333333',
  tertiaryLight: '#CCCCCC'
};
