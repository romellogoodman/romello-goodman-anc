import styled from 'styled-components';

export const Blurb = styled.div`
  img {
    float: left;
    margin-right: 16px;
  }

  h1 {
    display: inline-block;
    font-size: 24px;

    span {
      display: block;
    }
  }
`;

export const ClearBoth = styled.div`
  clear: both;
`;

export const Header = styled.header`
  padding: 16px 0;
  color: ${p => p.theme.secondary};

  p {
    display: inline-block;
  }
`;

export const HeaderLinks = styled.div`
  float: right;

  a {
    margin-right: 10px;
    color: ${p => p.theme.primary};
    text-decoration: none;

    &:hover {
      color: ${p => p.theme.primaryLight};
    }

    &:last-of-type {
      margin-right: 0px;
    }
  }
`;

export const SpanLine = styled.span`
  width: 100%;
  height: 4px;
  background: ${p => p.theme.primaryLight};
  margin: 10px 0;
`;

export const Link = styled.a``;

export const Section = styled.div`
  margin: 16px 0;
`;
