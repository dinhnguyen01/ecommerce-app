import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const CompareProduct = () => {
  return (
    <>
      <Meta title="So sánh sản phẩm" />
      <BreadCrumb title="So sánh sản phẩm" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/iphone11.jpeg"
                    className="img-fluid"
                    alt="iphone11"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-name">iPhone 11 128GB</h5>
                  <h6 className="product-price mb-2">9.990.000 ₫</h6>
                  <div>
                    <div className="product-info">
                      <h5 className="mb-0">Hãng sản xuất:</h5>
                      <p className="mb-0">Apple</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Loại sản phẩm:</h5>
                      <p className="mb-0">Điện thoại</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Tồn kho:</h5>
                      <p className="mb-0">18</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Màu sắc:</h5>
                      <p className="mb-0">Xanh lá</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Size:</h5>
                      <p className="mb-0">S M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img
                    src="images/iphone11.jpeg"
                    className="img-fluid"
                    alt="iphone11"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="product-name">iPhone 11 128GB</h5>
                  <h6 className="product-price mb-2">9.990.000 ₫</h6>
                  <div>
                    <div className="product-info">
                      <h5 className="mb-0">Hãng sản xuất:</h5>
                      <p className="mb-0">Apple</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Loại sản phẩm:</h5>
                      <p className="mb-0">Điện thoại</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Tồn kho:</h5>
                      <p className="mb-0">18</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Màu sắc:</h5>
                      <p className="mb-0">Xanh lá</p>
                    </div>
                    <div className="product-info">
                      <h5 className="mb-0">Size:</h5>
                      <p className="mb-0">S M L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
