import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export const SpecialProduct = () => {
  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="product-image d-flex align-items-center">
            <img src="images/iphone11.jpeg" className="img-fluid" alt="watch" />
          </div>
          <div className="product-content">
            <h6 className="product-brand">Apple</h6>
            <h5 className="product-name">iPhone 11 64GB</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="product-price">
              <span className="red-p">9.890.000 ₫</span> &nbsp;
              <strike>10.490.000₫</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 ngày</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>
            <div className="product-count my-3">
              <p>Số lượng: 5</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <Link className="button small-size">Thêm vào Giỏ hàng</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
