import * as Fetch from './fetchApi';
import { httpRequest } from '.';

jest.mock('./fetchApi');

describe('axios', () => {
  it('should call axios with correct params', async () => {
    const fetchMock = jest.spyOn(Fetch, 'fetchApi').mockResolvedValue({
      json: jest.fn().mockResolvedValue({}),
      status: 200
    } as unknown as Response);

    const response = await httpRequest({
      method: 'get',
      url: 'https://google.com',
      headers: { auth: 'auth' },
      body: { data: 'body' },
      query: { q: 'q' }
    });

    expect(response).toEqual({
      data: {},
      status: 200
    });

    expect(fetchMock).toHaveBeenCalledWith('https://google.com/?q=q', {
      body: { data: 'body' },
      headers: { auth: 'auth' },
      method: 'get'
    });
  });
});
