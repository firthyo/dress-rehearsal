import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  productId: string;
  variantId: string;
  size: string;
  name: string;
  price: number;
  color?: string;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  subtractItemFromCart: (item: CartItem) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
