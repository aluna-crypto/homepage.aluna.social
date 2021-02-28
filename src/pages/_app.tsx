import { ChakraProvider } from "@chakra-ui/react";
import fonts from "../font-face.js";
import theme from "../theme";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Head from "next/head";
import GoogleTagManager from "../components/GoogleTagManager";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleTagManager>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <title>
            Aluna Social : The Top Multi Exchange Crypto Trading Platform
          </title>
        </Head>
        <Global styles={fonts} />
        <Component {...pageProps} />
      </ChakraProvider>
    </GoogleTagManager>
  );
}

export default MyApp;
