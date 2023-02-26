import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div>hello</div>
        <Component {...pageProps} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
