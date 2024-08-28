import { createContext } from "react";

interface CheckoutContextProps {
  isDataReady: boolean;
  setIsDataReady: (isDataReady: boolean) => void;
}

export const CheckoutContext = createContext<CheckoutContextProps>({
  isDataReady: false,
  setIsDataReady: () => {},
});

export default CheckoutContext;
