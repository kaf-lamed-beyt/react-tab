import React from "react";
import Head from "next/head";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// const theme = extendTheme({
//   styles: {
//     global: () => ({
//       body: {
//         bg: "#fff",
//       },
//     }),
//   },
// });

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
