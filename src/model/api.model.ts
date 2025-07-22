export type Product = {
  id: number;
  title: string;
  thumbnail: string;
};

export type ProductsResponseModel = {
  products: Product[];
  total: number;
  limit: number;
};
