import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const TermAndCondition = () => {
  return (
    <>
      <Meta title="Điều khoản & Điều kiện" />
      <BreadCrumb title="Điều khoản & Điều kiện" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermAndCondition;
