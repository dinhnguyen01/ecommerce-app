import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const SignUp = () => {
  return (
    <>
      <Meta title="Đăng ký" />
      <BreadCrumb title="Đăng ký" />
      <div className="auth-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đăng ký</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Họ"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="Tên"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="moblie"
                      className="form-control"
                      placeholder="Số điện thoại"
                    />
                  </div>
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
                    <div className="d-flex justify-content-center align-items-center w-100 mt-3">
                      <button className="button btn-01 text-danger">
                        Đăng ký
                      </button>
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

export default SignUp;
