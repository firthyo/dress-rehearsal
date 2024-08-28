import { useState } from "react";
import CheckoutContext from "../context/CheckoutContext";

const CheckoutProvider = ({ children }: any) => {
  const [isDataReady, setIsDataReady] = useState(false);

  return (
    <CheckoutContext.Provider value={{ isDataReady, setIsDataReady }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
