import { useCallback, useEffect, useState } from 'react';
import type { ProductsResponseModel } from '../../model/api.model';

import './ProductList.styles.css';
import { Pagination } from '../Pagination';
import type { ProductListProps } from './ProductList.types';

export const ProductList = (props: ProductListProps) => {
  const { isLoading, isError, productsData } = props;

  const pageLimit = 20;
  const [page, setPage] = useState(1);
  const [dataToShow, setDataToShow] = useState<ProductsResponseModel['products']>([]);

  /** Helpers */
  const setDataAccordingToPage = useCallback(
    (page: number) => {
      return productsData?.products.slice((page - 1) * pageLimit, page * pageLimit);
    },
    [productsData?.products],
  );

  /** Handlers */
  const onPageChange = (newPage: number) => {
    setPage(newPage);
    setDataToShow(setDataAccordingToPage(newPage) ?? []);
  };

  /** Effects */
  useEffect(() => {
    if (!isLoading && !isError) {
      setDataToShow(setDataAccordingToPage(1) ?? []);
    }
  }, [isLoading, isError, setDataAccordingToPage]);

  return (
    <div className="product-list-root">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error Occurred!</p>}
      {productsData?.total === 0 && <p>No products to show.</p>}

      {!isLoading && !isError && (productsData?.total ?? 0) > 0 && (
        <>
          <div className="products-container">
            {dataToShow.map((product, index) => (
              <div key={`${product.title}-${index}`} className="product-container">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-container__image"
                />
                <p className="product-container__title">{product.title}</p>
              </div>
            ))}
          </div>

          <div className="product-list__footer">
            <Pagination page={page} totalPages={10} onPageChange={onPageChange} />
          </div>
        </>
      )}
    </div>
  );
};
