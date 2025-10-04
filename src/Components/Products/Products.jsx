import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  
  return (
    <div>
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Most Booked Service</h2>
          <a href="#" className="text-primary fw-semibold">
            See all
          </a>
        </div>
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
