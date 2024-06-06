import { gql } from "@apollo/client";
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  productThumbnail: string;
  productImages: {};
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
