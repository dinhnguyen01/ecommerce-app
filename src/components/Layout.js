import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const noFooterPaths = ["/cart", "/cart/payment-info", "/cart/payment"];
  const shouldShowFooter = !noFooterPaths.includes(location.pathname);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {shouldShowFooter && <Footer />}
    </>
  );
};

export default Layout;
