import { DetailedPokemon } from 'models';

export type GetPokemonDetailsParams = { id: string };

export type GetPokemonDetailsResult = DetailedPokemon;

export type GetPokemonDetails = (
  pagination: GetPokemonDetailsParams
) => Promise<GetPokemonDetailsResult>;
