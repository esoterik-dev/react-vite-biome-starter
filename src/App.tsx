import { useEffect, useState } from 'react';
import { ProductList } from './components/ProductList';
import type { ProductsResponseModel } from './model/api.model';

function App() {
  /** States */
  const [productsData, setProductsData] = useState<ProductsResponseModel>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /** Effects */
  // Fetch data
  useEffect(() => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products?limit=200')
      .then((data) => data.json())
      .then((data: ProductsResponseModel) => {
        setProductsData(data);
      })
      .catch((error) => setIsError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return <ProductList productsData={productsData} isLoading={isLoading} isError={isError} />;
}

export default App;
