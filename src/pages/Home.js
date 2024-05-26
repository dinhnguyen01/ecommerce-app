import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div className="main-banner p-2 position-relative">
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid img-thumbnail rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Tai nghe chính hãng</h4>
                  <h5>Sony WH-CH500</h5>
                  <p>Thiết kế hiện đại, cá tính, đa màu sắc</p>
                  <Link className="button">MUA NGAY</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="small-banner p-2 position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Sản phẩm bán chạy</h4>
                    <h5>MacBook Pro 16</h5>
                    <p>Hiệu năng vượt trội</p>
                  </div>
                </div>
                <div className="small-banner p-2 position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Sản phẩm mới</h4>
                    <h5>Smart Watch</h5>
                    <p>Trả góp chỉ hơn 1tr/tháng</p>
                  </div>
                </div>
                <div className="small-banner p-2 position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>Sản phẩm mới</h4>
                    <h5>IPad Air</h5>
                    <p>Trả góp chỉ hơn 1tr/tháng</p>
                  </div>
                </div>
                <div className="small-banner p-2 position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />

                  <div className="small-banner-content position-absolute">
                    <h4>Sản phẩm mới</h4>
                    <h5>HeadPhone</h5>
                    <p>Trả góp chỉ hơn 1tr/tháng</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Miễn phí vận chuyển</h6>
                    <p className="mb-0">Tất cả các đơn hàng trên 150k</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Ưu đãi bất ngờ mỗi ngày</h6>
                    <p className="mb-0">Tiết kiệm tới 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Hỗ trợ 24/7</h6>
                    <p className="mb-0">Mua sắm cùng chuyên gia</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Giá cả hợp lý</h6>
                    <p className="mb-0">Lấy giá tại nơi sản xuất</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Thanh toán an toàn</h6>
                    <p className="mb-0">Đảm bảo an toàn 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/watch.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/watch.jpg" alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Sản phẩm</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Sản phẩm nổi bật</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Tin Tức Mới Nhất</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
