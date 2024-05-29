import React from "react";

import "./App.css";
import Theme from "./styles/Theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";

import AuthenticationPage from "pages/authentication";
import { AuthProvider } from "provider/AuthProvider";
import { ModalProvider } from "provider/ModalProvider";
import VerifyEmail from "pages/verify-email";
import ResetPasswordForm from "components/form/reset-password";
import { HeaderNav } from "components/core";
import Products from "components/template/products";
// import { AuthProvider } from "context/Authcontext";
// import { ModalProvider } from "context/ModalContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Theme>
          <ModalProvider>
            <HeaderNav />
            <div className="App">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<AuthenticationPage />} />
                <Route path="/verify-email/:token" element={<VerifyEmail />} />
                <Route
                  path="/reset-password/:token"
                  element={<ResetPasswordForm />}
                ></Route>
                <Route path="/shop" element={<Products />} />
              </Routes>
            </div>
          </ModalProvider>
        </Theme>
      </AuthProvider>
    </Router>
  );
}

export default App;
