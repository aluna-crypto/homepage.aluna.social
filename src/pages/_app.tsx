import { ChakraProvider } from "@chakra-ui/react";
import fonts from "../font-face.js";
import theme from "../theme";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
