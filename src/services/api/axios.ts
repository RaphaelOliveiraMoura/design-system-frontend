import axios, { AxiosRequestHeaders } from 'axios';

import { HttpRequest } from './types';

export const httpRequest: HttpRequest = async params => {
  const response = await axios({
    method: params.method,
    url: params.url,
    headers: params.headers as unknown as AxiosRequestHeaders,
    data: params.body,
    params: params.query
  });

  return {
    data: response.data,
    status: response.status
  };
};
