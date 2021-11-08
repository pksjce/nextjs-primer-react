import React from 'react';
import Head from 'next/head';
import { Box, ThemeProvider } from '@primer/components';
import { useAnchoredPosition } from '../useAnchoredPosition.ts';

export async function getServerSideProps() {
  return new Promise((resolve) => resolve({ props: { data: 'None' } }));
}

export default function Home({ data }) {
  const anchorElementRef = React.useRef();
  const floatingElementRef = React.useRef();
  const { position } = useAnchoredPosition({
    anchorElementRef,
    floatingElementRef
  });

  return (
    <div className="container">
      <Head>
        <title>Nextjs + Primer React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <button ref={anchorElementRef}>clicky</button>
          </Box>
          <Box
            ref={floatingElementRef}
            sx={{
              position: 'absolute',
              padding: 10,
              backgroundColor: 'accent.subtle'
            }}
            style={{
              top: position?.top,
              left: position?.left
            }}
          >
            things
          </Box>
        </ThemeProvider>
      </main>
    </div>
  );
}
