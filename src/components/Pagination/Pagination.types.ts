export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};
