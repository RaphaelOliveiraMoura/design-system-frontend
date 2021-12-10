export type HttpParams<IBody, IHeaders> = {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  body?: IBody;
  headers?: IHeaders;
  query?: unknown;
};

export type HttpResponse<IResponse> = {
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
