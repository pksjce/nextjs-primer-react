import Head from "next/head";
import { Box, ThemeProvider } from "@primer/components";
import { FavoriteColorStory } from "../components/favorite-color";
import { ExternalAnchorStory } from "../components/external-anchor";
export async function getServerSideProps() {
  return new Promise((resolve) => resolve({ props: { data: "None" } }));
}

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="container">
      <Head>
        <title>Nextjs + Primer React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ThemeProvider>
          <Box m={2}>
            <FavoriteColorStory />
            <ExternalAnchorStory />
          </Box>
        </ThemeProvider>
      </main>
    </div>
  );
}
