import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">
                  Đăng kí để nhận thêm thông tin
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Nhập địa chỉ email..."
                  aria-label="Nhập địa chỉ email..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  ĐĂNG KÝ
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">THÔNG TIN LIÊN HỆ</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  Địa chỉ: Nghĩa Lạc, Nghĩa Hưng, Nam Định <br />
                  Hotline 1: 098765432
                  <br />
                  Hotline 1: 087654321
                </address>
                <Link
                  to="tel:+84 98765432"
                  className="text-white d-block mb-2"
                  style={{ width: "fit-content" }}
                >
                  (+84) 98765432
                </Link>
                <Link
                  style={{ width: "fit-content" }}
                  to="mailto:dinhzingpro@gmail.com"
                  className="mt-2 text-white d-inline mb-2"
                >
                  dinhzingpro@gmail.com
                </Link>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <Link to="" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsGithub className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsYoutube className="fs-4" />
                  </Link>
                  <Link to="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">THÔNG TIN</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Chính sách hoàn trả
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Chính sách vận chuyển
                </Link>
                <Link to="/term-condition" className="text-white py-2 mb-1">
                  Điều khoản & Điều kiện
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Tin tức
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">TRA CỨU</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">SẢN PHẨM NỔI BẬT</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Máy tính xách tay</Link>
                <Link className="text-white py-2 mb-1">Máy tính bảng</Link>
                <Link className="text-white py-2 mb-1">Tai nghe</Link>
                <Link className="text-white py-2 mb-1">Điện thoại</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                Copyright &copy; {new Date().getFullYear()}, Được cung cấp bởi
                Developer - DinhZing
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
