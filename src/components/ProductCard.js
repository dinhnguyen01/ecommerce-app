import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
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
        <div className="product-details">
          <h6 className="product-brand">Apple</h6>
          <h5 className="product-name">
            Apple Watch Series 9 GPS 45mm Sport Band S/M
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="product-price">9.890.000 ₫</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="prodcompare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="add_cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
