import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, ApolloClient } from "@apollo/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const root = ReactDOM.createRoot(document.getElementById("root"));

Sentry.init({
  dsn: "https://26e34eb0ff1f40e7825adaa5eef845f5@o1322277.ingest.sentry.io/6579377",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

//This is the main file of the App which controls the App renders, wraps the whole App.
// As this wraps the whole App to use my Database server, We can wrap the App with apollo provider and can pass our DB endpoint as client in it.

const client = new ApolloClient({
  uri: "https://food-coup-mania.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(true),
});
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
