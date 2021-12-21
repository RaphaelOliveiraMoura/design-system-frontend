import { HttpRequest } from './types';

export const httpRequest: HttpRequest = async params => {
  const url = new URL(params.url);

  if (params.query) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Object.keys(params.query as any).forEach(key =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      url.searchParams.append(key, (<any>params.query)[key])
    );
  }

  const response = await fetch(url.toString(), {
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
