
export interface Product {
  image: string;
  title: string;
  rating?: number;
  reviews?: number;
  price?: string;
  isSmall?: boolean;
}

export interface ProductGridData {
  title: string;
  products: Product[];
}
