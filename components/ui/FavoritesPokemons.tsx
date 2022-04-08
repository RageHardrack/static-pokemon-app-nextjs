import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./";

interface Props {
  pokemons: number[];
}

export const FavoritesPokemons: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
