import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GATSBY_WORDPRESS_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});
