import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function initializeApollo(initialState = {}) {
  const apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({ uri: process.env.APP_URL + "/graphql" }),
    cache: new InMemoryCache(),
  });

  if (initialState) {
    apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return apolloClient;

  return apolloClient;
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
