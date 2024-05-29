import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Rate } from "antd";
import wish_icon from "../images/wish.svg";
import prodcompare_icon from "../images/prodcompare.svg";
import view_icon from "../images/view.svg";
import addcard_icon from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div to="" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish_icon} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch-p.jpeg"
              className="img-fluid"
              alt="image_product"
            />
            <img
              src="images/watch-p-01.jpeg"
              className="img-fluid"
              alt="image_product"
            />
          </div>
          <div className="product-content">
            <h6 className="product-brand">Apple</h6>
            <h5 className="product-name">
              Apple Watch Series 9 GPS 45mm Sport Band S/M
            </h5>
            <Rate value={3} disabled />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Apple Watch Series 9 GPS là tân binh mới nhất trong loạt sản phẩm
              công nghệ đình đám vừa được Apple ra mắt cách đây không lâu.
            </p>
            <p className="product-price">9.890.000 ₫</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={prodcompare_icon} alt="prodcompare" />
              </Link>
              <Link>
                <img src={view_icon} alt="view" />
              </Link>
              <Link>
                <img src={addcard_icon} alt="add_cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
