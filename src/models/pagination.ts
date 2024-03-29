export type PaginationParams = {
  page: number;
  itemsPerPage: number;
};

export type PaginationResult = {
  total: number;
};

export type Pagination = PaginationParams & PaginationResult;
