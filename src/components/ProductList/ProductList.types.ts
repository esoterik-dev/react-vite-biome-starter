import type { ProductsResponseModel } from '../../model/api.model';

export type ProductListProps = {
  productsData?: ProductsResponseModel;
  isLoading: boolean;
  isError: boolean;
};
