import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import "./productCard.css";

const ProductCard = ({ product, handleModal }) => {
  const { price, title, image } = product;

  return (
    <div className="card p-2 border-0 card-hover card-box">
      <img
        src={image}
        className="card-img-top img-set"
        alt={`${title} (noimage)`}
      />
      <div className="card-body">
        <h5
          className="card-title overflow-elipsis fs-6 text-secondary"
          style={{
            maxHeight: "50px",
            mb: 0,
          }}>
          {title}
        </h5>
        <p className="card-text text-secondary-emphasis fw-semibold mb-0 fs-5">{`$${price}`}</p>
        <button
          type="button"
          className="btn btn-link px-0"
          onClick={() => handleModal(product)}>
          Show More
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mx-auto w-100 d-flex align-items-center justify-content-center gap-2 ">
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
