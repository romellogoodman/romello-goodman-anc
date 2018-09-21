/* eslint-disable react/react-in-jsx-scope */
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    const title = 'Romello Goodman for 5D06';
    const description = 'Website for ANC 5D06 Candidate Romello Goodman';

    return (
      <html>
        <Head>
          {/* Basic Meta */}
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={description} />
          {/* Open Graph & Twitter Meta */}
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="profile" />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="https://goodmanforanc.com" />
          <meta property="og:url" content="https://goodmanforanc.com" />
          <meta property="profile:first_name" content="Romello" />
          <meta property="profile:last_name" content="Goodman" />
          <meta property="profile:gender" content="male" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="romellogoodman" />
          <meta property="twitter:creator" content="romellogoodman" />
          {/* Other Meta Tags */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
