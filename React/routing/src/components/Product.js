import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
function Product() {
  const { id } = useParams();
  const product = getProductById(id);
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price} euro</p>
    </div>
  );
}

export default Product;

const getProductById = (id) => {
  return products.find((product) => id === product.id);
};
