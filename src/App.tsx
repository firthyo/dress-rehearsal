import React from "react";

import "./App.css";
import Theme from "./styles/Theme";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "provider/AuthProvider";
import { ModalProvider } from "provider/ModalProvider";

import AppRoutes from "routes/AppRoutes";
import { FilterProvider } from "provider/FilterProvider";
import { CartProvider } from "provider/CartProvider";
import CheckoutProvider from "provider/CheckoutProvider";
// import { AuthProvider } from "context/Authcontext";
// import { ModalProvider } from "context/ModalContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Theme>
          <ModalProvider>
            <FilterProvider>
              <CheckoutProvider>
                <CartProvider>
                  <AppRoutes />
                </CartProvider>
              </CheckoutProvider>
            </FilterProvider>
          </ModalProvider>
        </Theme>
      </AuthProvider>
    </Router>
  );
}

export default App;
