import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Đặt lại mật khẩu" />
      <BreadCrumb title="Đặt lại mật khẩu" />
      <div className="auth-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Đặt lại mật khẩu</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Nhập mật khẩu mới"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirm-password"
                      className="form-control"
                      placeholder="Nhập lại mật khẩu"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center w-100 mt-3">
                      <button className="button btn-01">Tiếp tục</button>
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

export default ResetPassword;
