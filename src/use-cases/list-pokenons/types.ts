import { PaginationParams, PaginationResult, Pokemon } from 'models';

export type ListPokemonsResult = {
  pokemons: Pokemon[];
} & PaginationResult;

export type ListPokemons = (
  pagination: PaginationParams
) => Promise<ListPokemonsResult>;
