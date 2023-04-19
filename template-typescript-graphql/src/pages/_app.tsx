import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps, ...rest }: AppProps) {
  const client = useApollo();
  return (
    <>
      <Head>
        <title>API - gql</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <Component {...pageProps} {...rest} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  );
}
