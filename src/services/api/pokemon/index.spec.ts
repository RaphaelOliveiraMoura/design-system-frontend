import * as Http from 'services/http';
import { httpPokemonRequest } from '.';

jest.mock('services/http');

describe('httpPokemonRequest', () => {
  it('should inject pokemon base url on request', async () => {
    const httpRequestSpy = jest.spyOn(Http, 'httpRequest');
    await httpPokemonRequest({ method: 'get', url: '/test' });
    expect(httpRequestSpy).toHaveBeenCalledWith({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/test'
    });
  });
});
