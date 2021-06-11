import * as React from "react";
import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apolloClient";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
