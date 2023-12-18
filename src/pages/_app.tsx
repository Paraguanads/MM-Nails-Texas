import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalstyle';
import { theme } from '../themes/theme';
import Layout from '../layout';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
          <SpeedInsights />
          <Analytics />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;