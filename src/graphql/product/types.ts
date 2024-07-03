// Define TypeScript interfaces for the response structure
export interface VariantSize {
  size: string;
  stock: number;
}

export interface Variant {
  value: string;
  color: string;
  images: string[];
  id: string;
  sizes: VariantSize[];
}

export interface Collection {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  productThumbnail: string;
  price: number;
  sizes: string[];
  description: string;
  material: string;
  stock: number;
  variants: Variant[];
  collection: Collection;
}
