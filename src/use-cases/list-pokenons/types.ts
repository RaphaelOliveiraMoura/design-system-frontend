import { PaginationParams, Pokemon } from 'models';

export type ListPokemons = (pagination: PaginationParams) => Promise<Pokemon[]>;
