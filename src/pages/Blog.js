import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";

const Blog = () => {
  return (
    <>
      <Meta title="Tin tức" />
      <BreadCrumb title="Tin tức" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Danh mục tin tức</h3>
              <div>
                <ul className="ps-0">
                  <li>Điện thoại</li>
                  <li>Laptop</li>
                  <li>Máy tính bảng</li>
                  <li>Đồng hồ thông minh</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
