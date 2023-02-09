import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../state/ProductContext";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { products, deleteProduct } = useContext(ProductContext);
  const product = findProduct(products, id);
  return (
    <div>
      <ProductForm product={product} />
      <div>
        <b>Name</b>
      </div>
      <div>{product.name}</div>
      <div>
        <b>Price</b>
      </div>
      <div>{product.price}</div>
      <div>
        <b>Description</b>
      </div>
      <div>{product.description}</div>
      <div>
        <b>Image</b>
      </div>
      <img src={product.image} alt="Skiboots" />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        &#8592; home
      </button>
      <button
        onClick={() => {
          deleteProduct(id);
          navigate("/");
        }}
      >
        Delete
      </button>
    </div>
  );
};

const findProduct = (products, id) => {
  return products.find((product) => product.id === id);
};

export default Product;
