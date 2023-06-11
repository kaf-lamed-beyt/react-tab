import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>react-tab</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
