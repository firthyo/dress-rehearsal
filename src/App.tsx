import React from "react";

import "./App.css";
import Theme from "./styles/Theme";

import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "provider/AuthProvider";
import { ModalProvider } from "provider/ModalProvider";

import AppRoutes from "routes/AppRoutes";
// import { AuthProvider } from "context/Authcontext";
// import { ModalProvider } from "context/ModalContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Theme>
          <ModalProvider>
            <AppRoutes />
          </ModalProvider>
        </Theme>
      </AuthProvider>
    </Router>
  );
}

export default App;
