import React from "react";

import "./App.css";
import Theme from "./styles/Theme";

import HeaderNav from "./components/core/header/nav-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";

import AuthenticationPage from "pages/authentication";
import { AuthProvider } from "provider/AuthProvider";
import { ModalProvider } from "provider/ModalProvider";
import VerifyEmail from "pages/verify-email";
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
                <Route
                  path="/verify-email/:token"
                  element={<VerifyEmail></VerifyEmail>}
                />
              </Routes>
            </div>
          </ModalProvider>
        </Theme>
      </AuthProvider>
    </Router>
  );
}

export default App;
