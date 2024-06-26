import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare_icon from "../images/compare.svg";
import wishlist_icon from "../images/wishlist.svg";
import user_icon from "../images/user.svg";
import cart_icon from "../images/cart.svg";
import menu_icon from "../images/menu.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Miễn phí vận chuyển & Miễn phí hoàn trả
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+84 87654321">
                  (+84) 87654321
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link to="/" className="text-white">
                  TechStore
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  id="search_product"
                  type="text"
                  className="form-control py-2"
                  placeholder="Tìm kiếm sản phẩm..."
                  aria-label="Tìm kiếm sản phẩm..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between gap-10">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare_icon} alt="" />
                    <p className="m-0">
                      So sánh <br /> Sản phẩm
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={wishlist_icon} alt="" />
                    <p className="m-0">
                      Sản phẩm <br /> Yêu thích
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user_icon} alt="" />
                    <p className="m-0">
                      Đăng nhập <br /> Tài khoản
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={cart_icon} alt="" />
                    <div className="d-flex flex-column gap-10">
                      <span className="bg-white text-dark text-center">0</span>
                      <p className="m-0">0₫</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu_icon} alt="" />
                      <span className="me-5 d-inline-block">
                        Danh mục Cửa hàng
                      </span>
                    </button>
                    <ul className="dropdown-menu p-0 border-0">
                      <li>
                        <Link className="dropdown-item text-white m-0" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white m-0" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white m-0" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Trang chủ</NavLink>
                    <NavLink to="/store">Cửa hàng</NavLink>
                    <NavLink to="/blogs">Tin tức</NavLink>
                    <NavLink to="/contact">Liên hệ</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
