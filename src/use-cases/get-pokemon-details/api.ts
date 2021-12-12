import { DetailedPokemon } from 'models';
import { httpRequest } from 'services/http';
import { GetPokemonDetails } from './types';

type HttpResult = {
  id: string;
  name: string;
  types: { slot: number; type: { name: string; url: string } }[];
};

export const getPokemonDetails: GetPokemonDetails = async ({ id }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const response = await httpRequest<HttpResult>({ method: 'get', url });

  const pokemon: DetailedPokemon = {
    id: response.data.id,
    name: response.data.name,
    types: response.data.types.map(t => t.type.name)
  };

  return pokemon;
};
