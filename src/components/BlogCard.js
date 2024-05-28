import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img
            src="images/blog-1.jpg"
            className="img-fluid w-100"
            alt="blog_image"
          />
        </div>
        <div className="blog-content">
          <p className="date">26/05/2024</p>
          <h5 className="title">
            Redmi Note 14 Pro 5G, dùng chip Snapdragon mới
          </h5>
          <p className="desc">
            Sau thành công của Redmi Note 13 Series, Xiaomi được cho là bắt đầu
            phát triển dòng smartphone kế nhiệm là Redmi Note 14. Thông tin được
            một leaker nổi tiếng chia sẻ trên mạng xã hội Weibo.
          </p>
          <Link to="/blog/:id" className="button">
            Đọc Thêm
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
