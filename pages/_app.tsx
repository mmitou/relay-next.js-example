import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Layout from "../src/components/layout";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "../src/RelayEnvironment";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
