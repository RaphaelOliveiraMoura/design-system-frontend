import { DetailedPokemon } from 'models';
import { httpPokemonRequest } from 'services/http/pokemon';
import { GetPokemonDetails } from './types';

type HttpResult = {
  id: string;
  name: string;
  types: { slot: number; type: { name: string; url: string } }[];
};

export const getPokemonDetails: GetPokemonDetails = async ({ id }) => {
  const response = await httpPokemonRequest<HttpResult>({
    method: 'get',
    url: `/pokemon/${id}`
  });

  const pokemon: DetailedPokemon = {
    id: response.data.id,
    name: response.data.name,
    types: response.data.types.map(t => t.type.name)
  };

  return pokemon;
};
