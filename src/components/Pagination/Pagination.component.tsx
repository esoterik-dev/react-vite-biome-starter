/** biome-ignore-all lint/suspicious/noArrayIndexKey: Ideally uuidV4 or _.uniqueId() should be used. */
import type { PaginationProps } from './Pagination.types';

import './Pagination.styles.css';

export const Pagination = (props: PaginationProps) => {
  const { page, totalPages, onPageChange } = props;

  /** Handlers */
  const handlePageClick = (clickedPage: number) => {
    if (clickedPage === page) {
      return;
    }

    onPageChange(clickedPage);
  };

  const pagesIterable = Array(totalPages).fill(undefined);

  return (
    <div className="pagination-root">
      <div className="pagination__btn-container">
        <button
          type="button"
          className={`page-btn ${page === 1 ? 'page-btn--disabled' : ''}`}
          disabled={page === 1}
          onClick={() => handlePageClick(page - 1)}
        >
          ◀
        </button>

        {pagesIterable.map((_, index) => {
          const isSelectedPage = index + 1 === page;

          return (
            <button
              key={`page-${index}`}
              type="button"
              className={`page-btn ${isSelectedPage ? 'page-btn--selected' : ''}`}
              disabled={isSelectedPage}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          type="button"
          className={`page-btn ${page === totalPages ? 'page-btn--disabled' : ''}`}
          disabled={page === totalPages}
          onClick={() => handlePageClick(page + 1)}
        >
          ▶
        </button>
      </div>
    </div>
  );
};
