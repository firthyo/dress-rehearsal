import React from "react";

import { HeaderNav } from "components/core";
import ResetPasswordForm from "components/form/reset-password";
import ProductDetail from "components/template/products/product-detail";
import { AllProducts } from "components/template/products/all-products";
import AuthenticationPage from "pages/authentication";
import HomePage from "pages/home";
import VerifyEmail from "pages/verify-email";

import { Routes, Route } from "react-router-dom";
import { AppContainer } from "styles/common";

export const AppRoutes = () => {
  return (
    <>
      <HeaderNav />

      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<AuthenticationPage />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordForm />}
          />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
        </Routes>
      </AppContainer>
    </>
  );
};

export default AppRoutes;
