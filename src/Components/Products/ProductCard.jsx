// ProductCard.js
import React from "react";


const cardStyle = {
  borderRadius: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  overflow: "hidden",
};

const imageStyle = {
  height: "200px",
  objectFit: "cover",
  borderRadius: "15px",
};

const ProductCard = ({ title, imageUrl, price, rating }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card p-2" style={cardStyle}>
        <img src={imageUrl} alt="Product" className="card-img-top" style={imageStyle} />
        <div className="card-body">
          <h6 className="card-title mt-2 fw-semibold">Artificial Grass Cleaning</h6>
          <div className="d-flex align-items-center mb-2">
            <span className="text-warning me-2">⭐ {rating}</span>
          </div>
          <div>
            <small className="text-muted me-2" style={{ textDecoration: "line-through" }}>₹650</small>
            <span className="fw-bold text-primary">₹{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
