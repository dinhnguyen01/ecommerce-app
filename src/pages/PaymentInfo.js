import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Meta from "../components/Meta";
import InputWithDropdown from "../components/InputWithDropdown";
import Container from "../components/Container";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };
  const handleProceedToPayment = () => {
    navigate("/cart/payment");
  };
  const options1 = ["Option 1.1", "Option 1.2", "Option 1.3"];
  const options2 = ["Option 2.1", "Option 2.2", "Option 2.3"];
  const options3 = ["Option 3.1", "Option 3.2", "Option 3.3"];
  return (
    <>
      <Meta title="Thông tin thanh toán" />
      <Container class1="payment-info-wrapper py-4 home-wrapper-2">
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
                <p className="fs-5 text-uppercase mb-1">Thông tin khách hàng</p>
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
              <div className="block-payment mt-4">
                <p className="fs-5 text-uppercase mb-1">Thông tin nhận hàng</p>
                <div className="block-payment-info d-flex flex-wrap">
                  <InputWithDropdown
                    className="w-50 p-2"
                    label="TỈNH / THÀNH PHỐ"
                    placeholderText="Chọn tỉnh/thành phố"
                    options={options1}
                  />
                  <InputWithDropdown
                    className="w-50 p-2"
                    label="QUẬN / HUYỆN"
                    placeholderText="Chọn quận/Huyện"
                    options={options2}
                  />
                  <InputWithDropdown
                    className="w-50 p-2"
                    label="PHƯỜNG / XÃ"
                    placeholderText="Chọn phường/xã"
                    options={options3}
                  />
                  <InputWithDropdown
                    className="w-50 p-2"
                    label="ĐỊA CHỈ"
                    placeholderText="Số nhà, tên đường"
                    options={[]}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bottom-bar container mt-auto">
                <div className="total-box d-flex justify-content-between align-items-start">
                  <p className="title-temp">Tổng tiền tạm tính:</p>
                  <div className="price d-flex flex-column align-items-end">
                    <span className="total">29.080.000đ</span>
                  </div>
                </div>
                <div className="btn-submit mt-2">
                  <button
                    onClick={handleProceedToPayment}
                    className="btn btn-danger d-flex flex-column justify-content-center align-items-center w-100"
                  >
                    Tiếp tục
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PaymentInfo;
