import React from "react";
import Head from "next/head";
import { Roboto } from "next/font/google";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#fff",
      },
    }),
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>react-tab</title>
        <meta
          name="description"
          content="state-aware tab components in react"
        />
        {/* Google's meta */}
        <meta itemProp="name" content="react-tab" />
        <meta
          itemProp="description"
          content="state-aware tab components in react"
        />
        <meta
          itemProp="image"
          content="https://react-tab.netlify.app/preview.png"
        />
        {/* Facebook's meta */}
        <meta
          property="og:url"
          content="https://react-tab.netlify.app/preview.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="react-tab" />
        <meta
          property="og:description"
          content="state-aware tab components in react"
        />
        <meta
          property="og:image"
          content="https://react-tab.netlify.app/preview.png"
        />
        {/* Twitter's meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="react-tab" />
        <meta
          name="twitter:description"
          content="state-aware tab components in react"
        />
        <meta name="twitter:site" content="react-tab.netlify.app" />
        <meta
          name="twitter:image"
          content="https://react-tab.netlify.app/preview.png"
        />
      </Head>
      <main className={roboto.className}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}
