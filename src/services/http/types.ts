export type HttpParams<IBody = unknown, IHeaders = unknown> = {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  body?: IBody;
  headers?: IHeaders;
  query?: unknown;
};

export type HttpResponse<IResponse = unknown> = {
  data: IResponse;
  status: number;
};

export type HttpRequest = <
  IResponse = unknown,
  IParams = unknown,
  IHeaders = unknown
>(
  params: HttpParams<IParams, IHeaders>
) => Promise<HttpResponse<IResponse>>;
