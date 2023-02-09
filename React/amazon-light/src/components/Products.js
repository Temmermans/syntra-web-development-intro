import React, { useContext } from "react";
import ProductContext from "../state/ProductContext";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <ProductForm />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
