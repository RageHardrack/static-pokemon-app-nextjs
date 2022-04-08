import { FC, ReactElement } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface Props {
  title?: string;
  children?: ReactElement;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name="author" content="Daniel Colmenares" />
        <meta
          name="description"
          content={`Información sobre el Pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
