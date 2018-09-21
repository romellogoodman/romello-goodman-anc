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
  background: '#FEFEFE',
  blue: '#2196F3',
  blueHover: '#0069C0',
  red: '#FF5231',
  redHover: '#DC0000',
  grey: '#F4F5F7'
};
