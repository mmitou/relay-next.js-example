import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Layout from "../src/components/layout";
import createEmotionCache from "../src/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;
