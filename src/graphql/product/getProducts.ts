import { gql } from "@apollo/client";
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  productThumbnail: string;
  productImages :{}
}

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      id
      name
      description
      price
      productThumbnail
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      productThumbnail

      price
      sizes
      variants {
        value
        color
        images
      }
      description
      material
      stock
    }
  }
`;
