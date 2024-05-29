import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
// import { Link } from "react-router-dom";
import { Rate } from "antd";
import ProductCard from "../components/ProductCard";

const Store = () => {
  const [grid, setGrid] = useState(3);
  return (
    <>
      <Meta title="Cửa hàng" />
      <BreadCrumb title="Cửa hàng" />
      <div className="store-wrrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Danh mục sản phẩm</h3>
                <div>
                  <ul className="ps-0">
                    <li>Điện thoại</li>
                    <li>Laptop</li>
                    <li>Máy tính bảng</li>
                    <li>Đồng hồ thông minh</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Lọc theo</h3>
                <div>
                  <h5 className="sub-title">Có sẵn</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="stock"
                      />
                      <label className="form-check-label" htmlFor="stock">
                        Trong kho (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="out_of_stock"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="out_of_stock"
                      >
                        Đang hết hàng (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Mức giá</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Từ"
                      />
                      <label htmlFor="floatingInput">Từ</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="đến"
                      />
                      <label htmlFor="floatingInput1">Đến</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Kích thước</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size_1"
                      />
                      <label className="form-check-label" htmlFor="size_1">
                        S (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="size_2"
                      />
                      <label className="form-check-label" htmlFor="size_2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Thẻ sản phẩm</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-body-secondary text-secondary rounded-3 py-2 px-3">
                      Tai nghe
                    </span>
                    <span className="badge bg-body-secondary text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-body-secondary text-secondary rounded-3 py-2 px-3">
                      Điện thoại
                    </span>
                    <span className="badge bg-body-secondary text-secondary rounded-3 py-2 px-3">
                      Đồng hồ thông minh
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Bạn có thể thích</h3>
                <div>
                  <div className="random-products d-flex align-items-center">
                    <div className="w-50">
                      <img
                        src="images/watch-p.jpeg"
                        className="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div className="w-50">
                      <h5 className="product-name">
                        Apple Watch Series 9 GPS 45mm Sport Band S/M
                      </h5>
                      <Rate value={3} disabled />
                      <p className="product-price">9.890.000 ₫</p>
                    </div>
                  </div>
                  <div className="random-products d-flex align-items-center">
                    <div className="w-50">
                      <img
                        src="images/watch-p.jpeg"
                        className="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div className="w-50">
                      <h5 className="product-name">
                        Apple Watch Series 9 GPS 45mm Sport Band S/M
                      </h5>
                      <Rate value={3} disabled />
                      <p className="product-price">9.890.000 ₫</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "150px" }}>
                      Sắp xếp theo:
                    </p>
                    <select
                      name=""
                      className="form-control form-select"
                      id=""
                      defaultValue="best-selling"
                    >
                      <option value="featured">Đặc trưng</option>
                      <option value="best-selling">Bán chạy nhất</option>
                      <option value="title-ascending">Từ A-Z</option>
                      <option value="title-descending">Từ Z-A</option>
                      <option value="price-ascending">Giá thấp đến cao</option>
                      <option value="price-descending">Giá cao đến thấp</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 sản phẩm</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <button
                        onClick={() => setGrid(3)}
                        className="btn-change-grid"
                      >
                        <img
                          src="images/gr4.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </button>
                      <button
                        onClick={() => setGrid(4)}
                        className="btn-change-grid"
                      >
                        <img
                          src="images/gr3.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </button>
                      <button
                        onClick={() => setGrid(6)}
                        className="btn-change-grid"
                      >
                        <img
                          src="images/gr2.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </button>
                      <button
                        onClick={() => setGrid(12)}
                        className="btn-change-grid"
                      >
                        <img
                          src="images/gr.svg"
                          className="d-block img-fluid"
                          alt="grid"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
