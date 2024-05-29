import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Rate } from "antd";
import { LuDot } from "react-icons/lu";

const SingleProduct = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <>
      <Meta title="Chi tiết sản phẩm" />
      <BreadCrumb title="Chi tiết sản phẩm" />
      <div className="single-product-wrapper home-wrapper-2 py-4">
        <div className="container-xxl mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="product-detail d-flex justify-content-center">
                {/* <!-- Bên trái --> */}
                <div className="col-md-6 ms-4">
                  <h1 className="product-title">Tên Sản Phẩm</h1>
                  <div className="mb-2 d-flex align-items-center gap-20">
                    <Rate value={3} disabled className="fs-6" />
                    <span>(100 đánh giá)</span>
                  </div>
                  <h2 className="text-danger product-price fs-4">
                    5,000,000 ₫
                  </h2>
                  <div
                    id="productCarousel"
                    className="carousel slide mt-3"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src="https://cdn1.viettelstore.vn/Images/Product/ProductImage/492861090.jpeg"
                          className="d-block w-100 img-fluid"
                          alt="Hình ảnh sản phẩm"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src="https://via.placeholder.com/500"
                          className="d-block w-100"
                          alt="Hình ảnh sản phẩm"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev custom-control"
                      type="button"
                      data-bs-target="#productCarousel"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next custom-control"
                      type="button"
                      data-bs-target="#productCarousel"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                {/* <!-- Bên phải --> */}
                <div className="col-md-6 ms-4">
                  <h4 className="mt-3">Lựa chọn cấu hình</h4>
                  <select className="form-select mb-3 w-75" defaultValue="">
                    <option value="">Chọn cấu hình</option>
                    <option value="1">8GB RAM - 128GB ROM</option>
                    <option value="2">12GB RAM - 256GB ROM</option>
                  </select>

                  <h4 className="mt-3">Chọn màu sắc</h4>
                  <div className="mb-3">
                    <button
                      className={`btn-02 color-btn ${
                        selectedColor === "Đen" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedColor("Đen")}
                    >
                      Đen
                    </button>
                    <button
                      className={`btn-02 color-btn ${
                        selectedColor === "Xanh" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedColor("Xanh")}
                    >
                      Xanh
                    </button>
                    <button
                      className={`btn-02 color-btn ${
                        selectedColor === "Đỏ" ? "selected" : ""
                      }`}
                      onClick={() => setSelectedColor("Đỏ")}
                    >
                      Đỏ
                    </button>
                  </div>

                  <h4 className="mt-3">Thông số kỹ thuật</h4>
                  <ul className="spec-list">
                    <li>Loại card đồ họa: 8 nhân GPU, 16 nhân Neural Engine</li>
                    <li>Dung lượng RAM: 8GB</li>
                    <li>Ổ cứng: 256GB</li>
                    <li>Kích thước màn hình: 13.6 inches</li>
                    <li>Công nghệ màn hình: Liquid Retina Display</li>
                    <li>Pin: 52,6 Wh</li>
                    <li>Hệ điều hành: MacOS</li>
                    <li>Độ phân giải màn hình: 2560 x 1664 pixels</li>
                    <li>
                      Cổng kết nối: 2 x Thunderbolt 3 Jack tai nghe 3.5 mm
                      MagSafe 3
                    </li>
                  </ul>

                  <div className="mt-4 d-flex align-items-center justify-content-center">
                    <button className="btn  btn-danger btn-lg me-3">
                      Mua ngay
                    </button>
                    <button className="btn btn-outline-secondary btn-lg">
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Mô tả sản phẩm --> */}
          <div className="product-detail mt-3">
            <div className="row">
              <div className="col-12">
                <h3>Mô tả sản phẩm</h3>
                <p>
                  Đây là mô tả chi tiết về sản phẩm. Sản phẩm này có những đặc
                  điểm nổi bật và tính năng vượt trội giúp bạn giải quyết các
                  nhu cầu hàng ngày. Bạn có thể xem thêm thông tin chi tiết và
                  đánh giá của người dùng để hiểu rõ hơn về sản phẩm này.
                </p>
              </div>
            </div>
          </div>
          {/* Form đánh giá */}
          <div className="product-detail mt-3">
            <div className="row">
              <div className="col-12">
                <h3>Đánh giá sản phẩm</h3>
                <form>
                  <div className="mb-3">
                    <Rate />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label fs-5">
                      Nhận xét:
                    </label>
                    <textarea
                      id="comment"
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Gửi đánh giá
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Hiển thị các đánh giá */}
          <div className="product-detail mt-3">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <h4 className="mb-4">Đánh giá của khách hàng</h4>
                <div className="card text-body border-0">
                  <div className="card-body p-4">
                    <div className="d-flex flex-start">
                      <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <h6 className="fw-bold mb-0">Arin</h6>
                          <LuDot />
                          <p className="mb-0">29/05/2024</p>
                        </div>
                        <Rate value={4} disabled className="fs-6" />
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-body border-0">
                  <div className="card-body p-4">
                    <div className="d-flex flex-start">
                      <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <h6 className="fw-bold mb-0">Arin</h6>
                          <LuDot />
                          <p className="mb-0">29/05/2024</p>
                        </div>
                        <Rate value={4} disabled className="fs-6" />
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-body border-0">
                  <div className="card-body p-4">
                    <div className="d-flex flex-start">
                      <img
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                        alt="avatar"
                        width="60"
                        height="60"
                      />
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <h6 className="fw-bold mb-0">Arin</h6>
                          <LuDot />
                          <p className="mb-0">29/05/2024</p>
                        </div>
                        <Rate value={4} disabled className="fs-6" />
                        <p className="mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
