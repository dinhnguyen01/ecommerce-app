import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
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
                  <br />
                  Email:dinhzingpro@gmail.com
                </address>
                <a
                  href="tel:+84 98765432"
                  className="mt-4 text-white d-block mb-4"
                >
                  (+84) 98765432
                </a>
                <a
                  href="mailto:dinhzingpro@gmail.com"
                  className="mt-4 text-white d-inline mb-2"
                >
                  dinhzingpro@gmail.com
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">THÔNG TIN</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Chính sách bảo mật</Link>
                <Link className="text-white py-2 mb-1">
                  Chính sách hoàn trả
                </Link>
                <Link className="text-white py-2 mb-1">
                  Chính sách vận chuyển
                </Link>
                <Link className="text-white py-2 mb-1">
                  Điều khoản & Điều kiện
                </Link>
                <Link className="text-white py-2 mb-1">Tin tức</Link>
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
