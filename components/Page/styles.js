import styled, {css} from 'styled-components';

export const ClearBoth = styled.div`
  clear: both;
`;

export const Header = styled.header`
  margin-bottom: 12px;
  padding: 12px 0;
  font-weight: 500;

  .title {
    color: ${p => p.theme.blue};

    ${p => p.theme.media.mobile`
      ${css`
        display: block;
        margin-bottom: 12px;
        text-align: center;
      `}
    `};
  }

  p {
    display: inline-block;
  }

  span {
    padding: 5px 9px;
    background: ${p => p.theme.red};
    color: white;
    border-radius: 3px;

    &:hover {
      background: ${p => p.theme.redHover};
    }
  }
`;

export const HeaderLinks = styled.div`
  float: right;

  ${p => p.theme.media.mobile`
    ${css`
      float: none;
      text-align: center;
    `}
  `};

  p {
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.grey};
    }

    &:last-of-type {
      margin-right: 0px;
    }
  }
`;

export const Hero = styled.div`
  .photo {
    float: left;
    margin-right: 12px;

    img {
      max-width: 275px;
    }

    ${p => p.theme.media.mobile`
      ${css`
        float: none;
        text-align: center;
        margin-bottom: 12px;
      `}
    `};
  }

  h1 {
    font-size: 32px;
    margin-bottom: 12px;

    span {
      display: block;
    }
  }
`;

export const DivideLine = styled.div`
  display: inline-block;
  height: 10px;
  width: 75px;
  margin-bottom: 12px;
  background: ${p =>
    p.color === 'blue'
      ? p.theme.blue
      : p.color === 'red'
        ? p.theme.red
        : 'black'};
`;

export const Link = styled.a`
  display: block;
  margin: 12px 0;
  color: ${p => p.theme.red};

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Section = styled.div`
  margin: 12px 0;
  padding: 12px 0;
  background: ${p => (p.background === 'grey' ? p.theme.grey : 'white')};

  h2 {
    margin-bottom: 12px;
  }

  p {
    margin: 12px 0;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }

  span {
    font-weight: 500;
    color: ${p => p.theme.blue};
  }
`;

export const Footer = styled(Section)`
  margin-bottom: 0;
  background: ${p => p.theme.blue};
  text-align: center;
  color: white;

  p {
    margin: 0;
  }
`;
