import React from "react";

import { Footer, HeaderNav } from "components/core";
import ResetPasswordForm from "components/form/reset-password";
import ProductDetail from "components/template/products/product-detail";
import { AllProducts } from "components/template/products/all-products";
import AuthenticationPage from "pages/authentication";
import HomePage from "pages/home";
import VerifyEmail from "pages/verify-email";

import { Routes, Route } from "react-router-dom";
import { AppContainer } from "styles/common";
import AboutUs from "pages/about-us";
import Checkout from "pages/checkout";
import CartOverview from "pages/cart-overview";
import UserProfile from "pages/user-profile";

import {
  TrackOrders,
  Profile,
  MembershipBenefit,
  ReturnsExchanges,
  WishList,
} from "pages/user-profile/detail";
import ContactPage from "pages/contact";

export const AppRoutes = () => {
  return (
    <>
      <HeaderNav />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<AuthenticationPage />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/about-us" element={<AboutUs></AboutUs>} />
          <Route path="/contact" element={<ContactPage></ContactPage>} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordForm />}
          />
          <Route path="/shop" element={<AllProducts />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/cart" element={<CartOverview />} /> */}
          <Route path="/user-profile/*" element={<UserProfile />}>
            {/* Nested routes within UserProfile */}
            <Route path="profile" element={<Profile />} />
            <Route path="track-orders" element={<TrackOrders />} />
            <Route path="wish-list" element={<WishList />} />
            <Route path="membership-benefit" element={<MembershipBenefit />} />

            <Route path="returns-exchanges" element={<ReturnsExchanges />} />
          </Route>
        </Routes>
      </AppContainer>
    </>
  );
};

export default AppRoutes;
