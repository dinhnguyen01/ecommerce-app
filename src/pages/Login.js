import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Meta title="Đăng nhập" />
      <BreadCrumb title="Đăng nhập" />
      <div className="auth-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đăng nhập</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Nhập địa chỉ email"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                  <div>
                    <Link
                      to="/forgot-password"
                      className="text-dark-emphasis mb-3 float-end"
                    >
                      Quên mật khẩu?
                    </Link>
                    <div className="d-flex justify-content-center align-items-center gap-30 w-100">
                      <button className="button btn-01" type="submit">
                        Đăng nhập
                      </button>
                      <Link to="/sign-up" className="button btn-01 text-danger">
                        Đăng ký
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

export default Login;
