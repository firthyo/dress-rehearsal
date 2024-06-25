import { gql } from "@apollo/client";
export interface Product {
  getProductById: any;
  id: string;
  name: string;
  description: string;
  price: number;
  productThumbnail: string;
  productImages: {};
  variants: {
    color: string;
    value: string;
    images: string[];
  }[];
}

export const GET_COLLECTIONS = gql`
  query GetCollections {
    getCollections {
      id
      name
      season
      year
      description
      products {
        id
        name
        price
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      productThumbnail
      price
      description
      material
      stock
      collection {
        id
        name
      }
      variants {
        value
        color
        images
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    getProductById(id: $id) {
      id
      name
      productThumbnail
      price
      sizes
      description
      material
      stock
      variants {
        value
        color
        images
        sizes {
          size
          stock
        }
      }
      collection {
        id
        name
      }
    }
  }
`;

export const FILTER_PRODUCTS = gql`
  query FilterProducts($filters: FilterInput) {
    filterProducts(filters: $filters) {
      id
      name
      productThumbnail
      price
      sizes
      typeOfProduct
      variants {
        value
        color
        images
        sizes {
          size
          stock
        }
      }
      description
      material
      stock
    }
  }
`;
