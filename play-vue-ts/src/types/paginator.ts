export interface Paginator {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {}[];
}
