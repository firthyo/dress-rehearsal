import { CartContext, CartItem } from "context/CartContext";
import { ReactNode, useEffect, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}
const CART_EXPIRATION_DAYS = 7; // 1 week

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems"); // Get the cart items from localStorage
    const savedCartTime = localStorage.getItem("cartTimestamp"); // Get the timestamp of when the cart was saved

    // Check if there is a saved cart and timestamp
    if (savedCart && savedCartTime) {
      const now = new Date().getTime(); // Get the current time
      const cartAge = now - parseInt(savedCartTime); // Calculate the age of the cart

      // If the cart is younger than the expiration time, use it
      if (cartAge < CART_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
        return JSON.parse(savedCart); // Parse and return the saved cart
      } else {
        // If the cart is too old, remove it from localStorage
        localStorage.removeItem("cartItems");
        localStorage.removeItem("cartTimestamp");
      }
    }

    // If no valid cart is found, return an empty array
    return [];
  });

  const addItemToCart = (newItem: CartItem) => {
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

  const clearCart = () => {
    setCartItems([]); // Clear the cartItems state
    localStorage.removeItem("cartItems"); // Remove cart items from localStorage
    localStorage.removeItem("cartTimestamp"); // Remove the timestamp from localStorage
  };

  useEffect(() => {
    const now = new Date().getTime(); // Get the current time
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save the cart items to localStorage
    localStorage.setItem("cartTimestamp", now.toString()); // Save the current timestamp to localStorage
  }, [cartItems]); // This effect runs whenever cartItems changes

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        itemCount,
        addItemToCart,
        subtractItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
