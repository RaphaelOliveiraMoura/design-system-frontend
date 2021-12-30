import axios from 'axios';
import { httpRequest } from '.';

jest.mock('axios');

describe('axios', () => {
  it('should call axios with correct params', async () => {
    const axiosMock = jest
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .spyOn(axios as any, 'default')
      .mockResolvedValue({ data: {}, status: 200 });

    const response = await httpRequest({
      method: 'get',
      url: 'url',
      headers: { auth: 'auth' },
      body: { data: 'body' },
      query: { q: 'q' }
    });

    expect(response).toEqual({
      data: {},
      status: 200
    });

    expect(axiosMock).toHaveBeenCalledWith({
      method: 'get',
      url: 'url',
      headers: { auth: 'auth' },
      data: { data: 'body' },
      params: { q: 'q' }
    });
  });
});
