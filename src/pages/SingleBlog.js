import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Tin tức bài viết" />
      <BreadCrumb title="Tin tức bài viết" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <FaArrowLeftLong className="fs-5" />
                  Quay lại trang tin tức
                </Link>
                <h3 className="title">
                  Redmi Note 14 Pro 5G, dùng chip Snapdragon mới
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid my-4"
                  alt="blog_image"
                />
                <p>
                  Sau thành công của dòng Redmi Note 13, Xiaomi được cho là bắt
                  đầu phát triển dòng smartphone kế nhiệm là Redmi Note 14.
                  Thông tin được chia sẻ trên mạng xã hội Weibo, cho chúng ta
                  cái nhìn rõ hơn về mẫu điện thoại mới thuộc dòng điện thoại
                  mới, khả năng là Redmi Note 14 Pro. Theo rò rỉ của Digital
                  Chat Station, dòng Redmi Note 14 sẽ được Xiaomi tập trung nâng
                  cấp về camera cũng như thiết kế. Ngoài ra, một thiết bị được
                  người này nhắc đến sẽ có màn hình AMOLED 1.5K với tốc độ làm
                  mới cao. Máy sẽ được trang bị chip Qualcomm SM7635, đây là vi
                  xử lý mới và khả năng cao được ra mắt với tên gọi là
                  Snapdragon 7s Gen 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
