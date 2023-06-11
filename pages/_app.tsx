import React from "react";
import Head from "next/head";
import { Roboto, Inter } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>react-tab</title>
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
