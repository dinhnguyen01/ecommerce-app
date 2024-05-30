import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Meta from "../components/Meta";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };
  return (
    <>
      <Meta title="Thông tin thanh toán" />
      <div className="payment-info-wrapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center flex-column">
              <div className="cart-header d-flex align-items-center justify-content-between w-50 pb-3">
                <button
                  onClick={handleGoback}
                  className="text-dark border-0 bg-transparent"
                >
                  <FaArrowLeftLong />
                </button>
                <h1 className="title mb-0 me-5">Thông tin</h1>
                <div></div>
              </div>
              <div className="block-info w-50">
                <div className="nav d-flex justify-content-center">
                  <div className="nav-item nav-item-active d-flex justify-content-center">
                    <span className="fs-5">1. Thông tin</span>
                  </div>
                  <div className="nav-item d-flex justify-content-center">
                    <span className="fs-5">2. Thanh toán</span>
                  </div>
                </div>
                <div className="product-list_show">
                  <div className="cart_item-product mt-3 d-flex align-items-start justify-content-start">
                    <div className="select-prodcut-action w-25 pe-3">
                      <img
                        src="https://cdn2.cellphones.com.vn/100x100,webp,q100/media/catalog/product/i/p/iphone-15-hong.png"
                        alt="prod_img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="product-info w-75">
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="text-black product-name w-100 mb-2">
                          iPhone 15 128GB | Chính hãng VN/A-Hồng
                        </p>
                        <button className="border-0 bg-transparent"></button>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="product-price mb-0">19.090.000đ</p>
                        <p className="quantity-prod mb-0">
                          Số lượng: <span className="text-danger">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="cart_item-product mt-3 d-flex align-items-start justify-content-start">
                    <div className="select-prodcut-action w-25 pe-3">
                      <img
                        src="https://cdn2.cellphones.com.vn/100x100,webp,q100/media/catalog/product/n/o/note-13-pro-plus-1.png"
                        alt="prod_img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="product-info w-75">
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="text-black product-name w-100 mb-2">
                          Xiaomi Redmi Note 13 Pro Plus 5G 8GB 256GB-Tím
                        </p>
                        <button className="border-0 bg-transparent"></button>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="product-price mb-0">9.990.000đ</p>
                        <p className="quantity-prod mb-0">
                          Số lượng: <span className="text-danger">1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-customer mt-4">
                  <p className="fs-5 text-uppercase">Thông tin khách hàng</p>
                  <div className="block-customer-info">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Họ tên: DinhZing</li>
                      <li className="list-group-item">
                        Số điện thoại: 098765432
                      </li>
                      <li className="list-group-item">
                        Email: dinhzingpro@gmail.com
                      </li>
                    </ul>
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

export default PaymentInfo;
