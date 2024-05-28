import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Quên mật khẩu" />
      <BreadCrumb title="Quên mật khẩu" />
      <div className="auth-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Quên mật khẩu</h3>
                <p className="restore-password-text">
                  Hãy nhập email của bạn vào bên dưới để bắt đầu quá trình khôi
                  phục mật khẩu.
                </p>
                <form action="" className="d-flex flex-column gap-30">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center align-items-center gap-30">
                      <button className="button btn-01" type="submit">
                        Tiếp tục
                      </button>
                      <Link className="button btn-01 text-danger" to="/login">
                        Huỷ
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
