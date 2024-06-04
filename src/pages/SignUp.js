import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title="Đăng ký" />
      <BreadCrumb title="Đăng ký" />
      <Container class1="auth-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Đăng ký</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="lastname" placeholder="Họ" />
                <CustomInput type="text" name="firstname" placeholder="Tên" />
                <CustomInput
                  type="tel"
                  name="moblie"
                  placeholder="Số điện thoại"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Nhập địa chỉ email"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                />
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
      </Container>
    </>
  );
};

export default SignUp;
