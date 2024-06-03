import React from "react";
import Meta from "../components/Meta";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleProceedToPayment_info = () => {
    navigate("/cart/payment-info");
  };
  return (
    <>
      <Meta title="Giỏ hàng" />
      <div className="cart-wapper py-4 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center flex-column">
              <div className="cart-header d-flex align-items-center justify-content-between w-50 pb-3">
                <Link to="/" className="text-dark">
                  <FaArrowLeftLong />
                </Link>
                <h1 className="title mb-0 me-5">Giỏ hàng của bạn</h1>
                <div></div>
              </div>
              <div className="cart-info w-50 mt-5">
                <div className="header-action d-flex align-items-center justify-content-between">
                  <div className="select-product-action d-flex align-items-center justify-content-center gap-10">
                    <input
                      className="custom-input"
                      type="checkbox"
                      name=""
                      id="choose_all"
                    />
                    <label className="custom-label fs-5" htmlFor="choose_all">
                      Chọn tất cả
                    </label>
                  </div>
                  <div></div>
                </div>
                {/* product-item */}
                <div className="cart_item-product mt-3 d-flex align-items-start justify-content-start">
                  <div className="select-prodcut-action w-25 pe-3">
                    <input
                      type="checkbox"
                      className="custom-input float-start"
                      id="product"
                    />
                    <label htmlFor="product">
                      <img
                        src="images/iphone11.jpeg"
                        alt="prod_img"
                        className="img-fluid"
                      />
                    </label>
                  </div>
                  <div className="product-info w-75">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <Link
                        to="/product-detail/:id"
                        className="text-black product-name"
                      >
                        iPhone 15 128GB | Chính hãng VN/A-Xanh
                      </Link>
                      <button className="border-0 bg-transparent">
                        <FaTrashAlt className="fs-6" />
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="product-price mt-3">8.900.000đ</p>
                      <div className="action d-flex">
                        <span className="minus d-flex justify-content-center align-items-center">
                          -
                        </span>
                        <input
                          id="prod_qty"
                          type="text"
                          readOnly="readonly"
                          value={2}
                        />
                        <span className="plus d-flex justify-content-center align-items-center">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart_item-product mt-3 d-flex align-items-start justify-content-start">
                  <div className="select-prodcut-action w-25 pe-3">
                    <input
                      type="checkbox"
                      className="custom-input float-start"
                      id="product"
                    />
                    <label htmlFor="product">
                      <img
                        src="images/watch-p.jpeg"
                        alt="prod_img"
                        className="img-fluid"
                      />
                    </label>
                  </div>
                  <div className="product-info w-75">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <Link
                        to="/product-detail/:id"
                        className="text-black product-name"
                      >
                        iPhone 15 128GB | Chính hãng VN/A-Xanh
                      </Link>
                      <button className="border-0 bg-transparent">
                        <FaTrashAlt className="fs-6" />
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="product-price mt-3">8.900.000đ</p>
                      <div className="action d-flex">
                        <span className="minus d-flex justify-content-center align-items-center">
                          -
                        </span>
                        <input
                          id="prod_qty"
                          type="text"
                          readOnly="readonly"
                          value={2}
                        />
                        <span className="plus d-flex justify-content-center align-items-center">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart_item-product mt-3 d-flex align-items-start justify-content-start">
                  <div className="select-prodcut-action w-25 pe-3">
                    <input
                      type="checkbox"
                      className="custom-input float-start"
                      id="product"
                    />
                    <label htmlFor="product">
                      <img
                        src="images/watch-p.jpeg"
                        alt="prod_img"
                        className="img-fluid"
                      />
                    </label>
                  </div>
                  <div className="product-info w-75">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <Link
                        to="/product-detail/:id"
                        className="text-black product-name"
                      >
                        iPhone 15 128GB | Chính hãng VN/A-Xanh
                      </Link>
                      <button className="border-0 bg-transparent">
                        <FaTrashAlt className="fs-6" />
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="product-price mt-3">8.900.000đ</p>
                      <div className="action d-flex">
                        <span className="minus d-flex justify-content-center align-items-center">
                          -
                        </span>
                        <input
                          id="prod_qty"
                          type="text"
                          readOnly="readonly"
                          value={2}
                        />
                        <span className="plus d-flex justify-content-center align-items-center">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart_item-product mt-3 d-flex align-items-start justify-content-start">
                  <div className="select-prodcut-action w-25 pe-3">
                    <input
                      type="checkbox"
                      className="custom-input float-start"
                      id="product"
                    />
                    <label htmlFor="product">
                      <img
                        src="images/watch-p.jpeg"
                        alt="prod_img"
                        className="img-fluid"
                      />
                    </label>
                  </div>
                  <div className="product-info w-75">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                      <Link
                        to="/product-detail/:id"
                        className="text-black product-name"
                      >
                        iPhone 15 128GB | Chính hãng VN/A-Xanh
                      </Link>
                      <button className="border-0 bg-transparent">
                        <FaTrashAlt className="fs-6" />
                      </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <p className="product-price mt-3">8.900.000đ</p>
                      <div className="action d-flex">
                        <span className="minus d-flex justify-content-center align-items-center">
                          -
                        </span>
                        <input
                          id="prod_qty"
                          type="text"
                          readOnly="readonly"
                          value={2}
                        />
                        <span className="plus d-flex justify-content-center align-items-center">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* product-item */}
              </div>
              {/* stickyBottomBar */}
              <div>
                <div id="stickyBottomBar">
                  <div className="price-temp">
                    <p>Tạm tính</p> <span>20.000.000đ</span>
                  </div>
                  {/* <button disabled="disabled" className="btn-action disabled">
                    Mua ngay
                  </button> */}
                  <button
                    onClick={handleProceedToPayment_info}
                    className="btn-action"
                  >
                    Mua ngay (2)
                  </button>
                </div>
              </div>
              {/* stickyBottomBar */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
