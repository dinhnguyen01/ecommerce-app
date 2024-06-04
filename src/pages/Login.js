import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title="Đăng nhập" />
      <BreadCrumb title="Đăng nhập" />
      <Container class1="auth-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Đăng nhập</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Nhập địa chỉ email"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  className="mt-1"
                />
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
      </Container>
    </>
  );
};

export default Login;
