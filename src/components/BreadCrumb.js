import React from "react";
import { Link } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="d-flex align-items-center mb-0">
              <LuHome className="me-1 mb-1 text-secondary" />
              <Link to="/" className="text-secondary">
                Trang Chủ
              </Link>
              <FaAngleRight /> {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
