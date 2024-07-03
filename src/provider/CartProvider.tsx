import { CartContext, CartItem } from "context/CartContext";
import { ReactNode, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (newItem: CartItem) => {
    console.log("this is newItem", newItem);
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId &&
          item.size === newItem.size &&
          item.color === newItem.color // Include color in the comparison
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  const subtractItemFromCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.variantId === item.variantId &&
          cartItem.size === item.size &&
          cartItem.color === item.color // Include color in the comparison
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        const currentQuantity = updatedItems[existingItemIndex].quantity;
        if (currentQuantity > 1) {
          updatedItems[existingItemIndex].quantity -= 1;
        } else {
          updatedItems.splice(existingItemIndex, 1);
        }
        return updatedItems;
      } else {
        return prevItems;
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, subtractItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
