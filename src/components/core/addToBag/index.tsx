import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "graphql/cart/addToCart";
import React from "react";

interface VariantInput {
  value: string;
  color: string;
  size: string;
}

interface AddToCartButtonProps {
  sessionId?: string;
  userId?: string;
  productId: string;
  variant: VariantInput;
  quantity: number;
}

export const AddToBag: React.FC<AddToCartButtonProps> = ({
  sessionId,
  userId,
  productId,
  variant,
  quantity,
}) => {
  const [addToCart, { data, loading, error }] = useMutation(ADD_TO_CART);

  const handleAddToCart = () => {
    addToCart({
      variables: {
        sessionId,
        userId,
        productId,
        variant,
        quantity,
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToBag;
