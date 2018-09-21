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
    padding: 0 20px;
  }
`;

const sizes = {
  mobile: 600
};

/**
 * This trick is taken from styled-components repo
 * https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
 */

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const theme = {
  media,
  background: '#FEFEFE',
  blue: '#2196F3',
  blueHover: '#0069C0',
  red: '#FF5231',
  redHover: '#DC0000',
  grey: '#F4F5F7'
};
