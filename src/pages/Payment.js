import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import card_icon from "../images/atm-card.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import icon_cod from "../images/icon-thanh-toan-1.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import icon_momo from "../images/momo_vi.webp";
import icon_vnpay from "../images/vnpay.webp";
import icon_zalopay from "../images/zalopay.webp";
import Container from "../components/Container";

const Payment = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate(-1);
  };

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    // Thêm class 'no-scroll' vào phần tử 'body' khi modal được mở
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Loại bỏ sự kiện cuộn trang khi modal được mở
    const handleScroll = (e) => {
      e.preventDefault();
    };

    if (showModal) {
      document.body.addEventListener("scroll", handleScroll, {
        passive: false,
      });
    } else {
      document.body.removeEventListener("scroll", handleScroll);
    }

    // Cleanup effect
    return () => {
      document.body.classList.remove("no-scroll");
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, [showModal]);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };
  const isPaymentSelected = selectedPaymentMethod !== null;

  return (
    <>
      <Meta title="Phương thức thanh toán" />
      <Container class1="payment-wapper py-4 home-wrapper-2">
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
                <div className="nav-item d-flex justify-content-center">
                  <span className="fs-5">1. Thông tin</span>
                </div>
                <div className="nav-item nav-item-active d-flex justify-content-center">
                  <span className="fs-5">2. Thanh toán</span>
                </div>
              </div>
              <div className="info-payment">
                <div className="info-quote">
                  <div className="info-quote_block d-flex flex-column gap-10">
                    <div className="quote-block_item d-flex align-items-start justify-content-between gap-20">
                      <p className="quote-block_title mb-0">
                        Số lượng sản phẩm
                      </p>
                      <p className="quote-block_value mb-0">02</p>
                    </div>
                    <div className="quote-block_item d-flex align-items-start justify-content-between gap-20">
                      <p className="quote-block_title mb-0">
                        Tiền hàng (tạm tính)
                      </p>
                      <p className="quote-block_value mb-0">29.080.000đ</p>
                    </div>
                    <div className="quote-block_item d-flex align-items-start justify-content-between gap-20">
                      <p className="quote-block_title mb-0">Phí vận chuyển</p>
                      <p className="quote-block_value mb-0">Miễn phí</p>
                    </div>
                  </div>
                  <div className="info-quote_bottom d-flex align-items-start justify-content-between">
                    <div className="quote-bottom_title">
                      <p>Tổng tiền</p>
                      <span>(đã gồm VAT)</span>
                    </div>
                    <p className="quote-bottom_value">29.080.000đ</p>
                  </div>
                </div>
              </div>
              <div className="payment-quote mt-4">
                <p className="fs-5 text-uppercase mb-1">Thông tin thanh toán</p>
                <div
                  onClick={openModal}
                  className="payment-quote_main d-flex align-item-center "
                >
                  <div className="payment-main_img">
                    <img src={card_icon} alt="atm-card" className="img-fluid" />
                  </div>
                  <div className="payment-main_title">
                    <p>Chọn phương thức thanh toán</p>
                    <span>Giảm thêm tới 200.000đ</span>
                  </div>
                  <div className="payment-main_arrow">
                    <IoIosArrowForward className="fs-4" />
                  </div>
                </div>
                <div className="payment-quote_modal">
                  {showModal && (
                    <>
                      <div
                        onClick={closeModal}
                        className="payment-overlay"
                      ></div>
                      <div className="payment-modal">
                        <div className="payment-modal_head d-flex align-items-center justify-content-between">
                          <p>Chọn phương thức thanh toán</p>
                          <em onClick={closeModal}>
                            <IoMdClose className="fs-4" />
                          </em>
                        </div>
                        <div className="payment-modal_body">
                          <div className="payment-modal_body-main">
                            <div className="list-payment">
                              <p className="text-uppercase mb-0">Khả dụng</p>
                              <div
                                className={`list-payment_item ${
                                  selectedPaymentMethod === "cash_on_delivery"
                                    ? "list-payment_item--active"
                                    : ""
                                }`}
                                onClick={() =>
                                  selectPaymentMethod("cash_on_delivery")
                                }
                              >
                                <div className="paymet-item_img">
                                  <img
                                    src={icon_cod}
                                    alt="icon-thanh-toan"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="paymet-item_title">
                                  <p>Thanh toán khi nhận hàng</p>
                                </div>
                                <div className="payment-item_tick">
                                  <IoCheckmarkCircle className="text-danger" />
                                </div>
                              </div>
                              <div
                                className={`list-payment_item ${
                                  selectedPaymentMethod === "MoMo"
                                    ? "list-payment_item--active"
                                    : ""
                                }`}
                                onClick={() => selectPaymentMethod("MoMo")}
                              >
                                <div className="paymet-item_img">
                                  <img
                                    src={icon_momo}
                                    alt="icon-thanh-toan"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="paymet-item_title">
                                  <p>VÍ MoMo</p>
                                </div>
                                <div className="payment-item_tick">
                                  <IoCheckmarkCircle className="text-danger" />
                                </div>
                              </div>
                              <div
                                className={`list-payment_item ${
                                  selectedPaymentMethod === "VNPAY"
                                    ? "list-payment_item--active"
                                    : ""
                                }`}
                                onClick={() => selectPaymentMethod("VNPAY")}
                              >
                                <div className="paymet-item_img">
                                  <img
                                    src={icon_vnpay}
                                    alt="icon-thanh-toan"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="paymet-item_title">
                                  <p>VNPAY</p>
                                </div>
                                <div className="payment-item_tick">
                                  <IoCheckmarkCircle className="text-danger" />
                                </div>
                              </div>
                              <div
                                className={`list-payment_item ${
                                  selectedPaymentMethod === "ZaloPay"
                                    ? "list-payment_item--active"
                                    : ""
                                }`}
                                onClick={() => selectPaymentMethod("ZaloPay")}
                              >
                                <div className="paymet-item_img">
                                  <img
                                    src={icon_zalopay}
                                    alt="icon-thanh-toan"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="paymet-item_title">
                                  <p>ZaloPay</p>
                                </div>
                                <div className="payment-item_tick">
                                  <IoCheckmarkCircle className="text-danger" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="payment-modal_bottom">
                          <button className="btn" disabled={!isPaymentSelected}>
                            Xác nhận
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="address-quote mt-4">
                <p className="fs-5 text-uppercase mb-1">Thông tin nhận hàng</p>
                <div className="address-quote_main">
                  <div className="address-quote_block">
                    <div className="address-quote_item">
                      <p className="address-quote_title mb-0">Khách hàng</p>
                      <p className="address-quote_value mb-0">DinhZing</p>
                    </div>
                    <div className="address-quote_item">
                      <p className="address-quote_title mb-0">Số điện thoại</p>
                      <p className="address-quote_value mb-0">0706965997</p>
                    </div>
                    <div className="address-quote_item">
                      <p className="address-quote_title mb-0">Email</p>
                      <p className="address-quote_value mb-0">
                        dinhzingpro@gmail.com
                      </p>
                    </div>
                    <div className="address-quote_item">
                      <p className="address-quote_title mb-0">Nhận hàng tại</p>
                      <p className="address-quote_value mb-0">
                        Đội 4, Đồng Thành, Xã Nghĩa Lạc, Huyện Nghĩa Hưng, Nam
                        Định
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bottom-bar container mt-auto">
                <div className="total-box d-flex justify-content-between align-items-start">
                  <p className="title-temp">Tổng tiền tạm tính:</p>
                  <div className="price d-flex flex-column align-items-end">
                    <span className="total">29.280.000đ</span>
                  </div>
                </div>
                <div className="btn-submit mt-2">
                  <button className="btn btn-danger d-flex flex-column justify-content-center align-items-center w-100">
                    Thanh toán
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

export default Payment;
