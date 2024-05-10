import React from "react";

import "./App.css";
import Theme from "./styles/Theme";
import styled from "styled-components";
import HeaderNav from "./components/header/nav-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";

import { AuthProvider } from "pages/authentication/Authcontext";
import AuthenticationPage from "pages/authentication";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Theme>
          <HeaderNav />
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-up" element={<AuthenticationPage />} />
            </Routes>
          </div>
        </Theme>
      </AuthProvider>
    </Router>
  );
}

export default App;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;
