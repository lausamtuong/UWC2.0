import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import "../styles/leaflet.css"
import type { AppProps } from "next/app";
import React from "react";
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
// import { SSRProvider } from '@react-aria/ssr';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
