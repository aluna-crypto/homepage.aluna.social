import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>
            Aluna Social : The Top Multi Exchange Crypto Trading Platform
          </title>
          <meta
            name="description"
            content="A crypto trading platform enabling traders to manage multiple exchange accounts from one place while leveraging social features and copy trading."
          />
          <meta property="og:type" content="website" />
          <meta
            name="og:title"
            property="og:title"
            content="Aluna Social : The Top Multi Exchange Crypto Trading Platform "
          />
          <meta
            name="og:description"
            property="og:description"
            content="A crypto trading platform enabling traders to manage multiple exchange accounts from one place while leveraging social features and copy trading."
          />
          <meta property="og:site_name" content="Aluna.social" />
          <meta property="og:url" content="https://aluna.social" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Aluna Social : The Top Multi Exchange Crypto Trading Platform "
          />
          <meta
            name="twitter:description"
            content="A crypto trading platform enabling traders to manage multiple exchange accounts from one place while leveraging social features and copy trading."
          />
          <meta name="twitter:site" content="https://aluna.social" />
          <meta name="twitter:creator" content="@AlunaSocial" />
          <link rel="icon" type="image/png" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <meta
            property="og:image"
            content="https://aluna.social/img/og-image-landscape.jpg"
          />
          <meta
            name="twitter:image"
            content="https://aluna.social/img/og-image-landscape.jpg"
          />
          <link rel="canonical" href="https://aluna.social" />
          <link
            rel="preload"
            href="https://aluna.social/fonts/Roboto-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://aluna.social/fonts/Roboto-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="https://aluna.social/fonts/Roboto-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
