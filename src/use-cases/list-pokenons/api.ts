import { Pokemon } from 'models';
import { httpRequest } from 'services/http';
import { ListPokemons } from './types';

type HttpPokemon = {
  name: string;
  url: string;
};

type HttpResult = {
  count: number;
  next: string;
  previous?: string;
  results: HttpPokemon[];
};

export const listPokemons: ListPokemons = async pagination => {
  const query = {
    limit: pagination.itemsPerPage,
    offset: pagination.itemsPerPage * (pagination.page - 1)
  };

  const url = 'https://pokeapi.co/api/v2/pokemon';

  const response = await httpRequest<HttpResult>({ method: 'get', url, query });

  const pokemons: Pokemon[] = response.data.results.map(pokemon => {
    const [matchedId] = pokemon.url.match(/\/\d+\//gi) || [];
    const id = (matchedId || '').replace('/', '');

    return { id, name: pokemon.name };
  });

  return { pokemons, total: response.data.count };
};
