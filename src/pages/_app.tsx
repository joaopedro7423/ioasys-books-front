import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { themes } from "styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themes}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
