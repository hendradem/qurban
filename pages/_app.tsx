import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import TransactionModal from "../components/modals/TransactionModal";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import "swiper/css";
import "react-spring-bottom-sheet/dist/style.css";
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <TransactionModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
