import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Đặt lại mật khẩu" />
      <BreadCrumb title="Đặt lại mật khẩu" />
      <Container class1="auth-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Đặt lại mật khẩu</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="password"
                  name="password"
                  className="mt-1"
                  placeholder="Nhập mật khẩu mới"
                />
                <CustomInput
                  type="password"
                  name="confirm-password"
                  placeholder="Nhập lại mật khẩu"
                />
                <div>
                  <div className="d-flex justify-content-center w-100 mt-3">
                    <button className="button btn-01">Tiếp tục</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
