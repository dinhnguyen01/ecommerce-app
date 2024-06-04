import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import { services } from "../utils/Data";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Meta title="Trang chủ" />
      <Container class1="home-wrapper-1 py-5">
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
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div key={j} className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="service" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
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
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản phẩm nổi bật</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark position-relative">
              <img
                src="images/famous-1.png"
                className="img-fluid ms-4 mb-2"
                alt="famous_product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-white">màn hình lớn</h5>
                <h6 className="text-white">Apple Watch Series 8</h6>
                <p className="text-white">
                  Phụ kiện giảm giá đến 35% khi mua cùng
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-white position-relative">
              <img
                src="images/famous-2.jpeg"
                className="img-fluid ms-4 mb-2"
                alt="famous_product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Máy tính bảng</h5>
                <h6 className="text-dark">iPad Air (Gen 5)</h6>
                <p className="text-dark">Hỗ trợ Center Stage, quay video 4K</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-white position-relative">
              <img
                src="images/famous-3.jpg"
                className="img-fluid ms-4 mb-2"
                alt="famous_product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Laptop</h5>
                <h6 className="text-dark">Macbook Air 2022</h6>
                <p className="text-dark">
                  MacBook Air 2022 có thể sạc nhanh 67 W
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-white position-relative">
              <img
                src="images/famous-4.jpeg"
                className="img-fluid ms-4 mb-2"
                alt="famous_product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Headphone</h5>
                <h6 className="text-dark">AirPods Pro (Gen 2)</h6>
                <p className="text-dark">6h nghe nhạc, 4,5h đàm thoại</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="speacial-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản phẩm đặc trưng</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Sản phẩm phổ biến</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
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
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Tin Tức Mới Nhất</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
