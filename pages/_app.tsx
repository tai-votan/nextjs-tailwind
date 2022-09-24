import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => NProgress.start();

    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default App;
