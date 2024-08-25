import { gql } from "apollo-server";

export const ADD_TO_CART = gql`
  mutation AddToCart(
    $sessionId: String
    $userId: ID
    $productId: ID!
    $variant: ProductVariantInput!
    $quantity: Int!
  ) {
    addToCart(
      sessionId: $sessionId
      userId: $userId
      productId: $productId
      variant: $variant
      quantity: $quantity
    ) {
      id
      items {
        productId
        variant {
          value
          color
          size
          id
        }
        quantity
        price
      }
    }
  }
`;
