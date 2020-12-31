import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useApollo } from 'config/client';
import { ApolloProvider } from '@apollo/client';
import { GlobalStyles } from '../src/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  const { initialApolloState } = pageProps;
  const apolloClient = useApollo(initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>SkeletonApp</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
