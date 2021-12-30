import { HttpRequest } from '../../types';
import { fetchApi } from './fetchApi';

export const httpRequest: HttpRequest = async params => {
  const url = new URL(params.url);

  if (params.query) {
    Object.keys(params.query as unknown as object).forEach(key =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      url.searchParams.append(key, (<any>params.query)[key])
    );
  }

  const response = await fetchApi(url.toString(), {
    method: params.method,
    headers: params.headers as unknown as Headers,
    body: params.body as unknown as BodyInit
  });

  const json = await response.json();

  return {
    data: json,
    status: response.status
  };
};
