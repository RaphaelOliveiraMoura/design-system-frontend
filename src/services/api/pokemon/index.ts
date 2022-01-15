import { HttpRequest, HttpParams } from 'services/http/types';
import { httpRequest } from 'services/http';

export const httpPokemonRequest: HttpRequest = params => {
  const baseUrl = 'https://pokeapi.co/api/v2';
  const url = baseUrl + params.url;
  const newParams: HttpParams = { ...params, url };
  return httpRequest(newParams);
};
