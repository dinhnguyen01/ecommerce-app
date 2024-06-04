import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title="Sản phẩm yêu thích" />
      <BreadCrumb title="Sản phẩm yêu thích" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
