export type Pokemon = {
  id: string;
  name: string;
};

export type DetailedPokemon = {
  types: string[];
} & Pokemon;
