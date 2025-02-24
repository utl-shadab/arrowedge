import { Toaster } from "react-hot-toast";
import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
