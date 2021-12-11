import { PaginationParams, Pokemon } from 'models';

export type ListPokemonsResult = {
  pokemons: Pokemon[];
  total: number;
};

export type ListPokemons = (
  pagination: PaginationParams
) => Promise<ListPokemonsResult>;
