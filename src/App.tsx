import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Theme from "./styles/Theme";
import styled from "styled-components";
import HeaderNav from "./components/header/nav-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";

function App() {
  return (
    <Router>
      <Theme>
        <HeaderNav /> {/* This ensures the navbar is displayed on all pages */}
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
          {/* The rest of your existing code can go into one of the page components */}
        </div>
      </Theme>
    </Router>
  );
}

export default App;

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;
