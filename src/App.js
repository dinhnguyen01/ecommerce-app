import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import ScrollToTop from "./components/ScrollToTop";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import PaymentInfo from "./pages/PaymentInfo";
import Payment from "./pages/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="product-detail/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cart/payment-info" element={<PaymentInfo />} />
            <Route path="cart/payment" element={<Payment />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist-product" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-condition" element={<TermAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
