import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { GTM_ID } from "../lib/gtm";
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
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
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://aluna.social/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://aluna.social/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://aluna.social/img/favicon-16x16.png"
          />
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
            href="/fonts/Roboto-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Roboto-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          {/* Google Tag Manager - Global base code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
