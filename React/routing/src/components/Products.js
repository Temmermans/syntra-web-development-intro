import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../products";

function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/product/${product.id}`} key={product.id}>
                {product.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
