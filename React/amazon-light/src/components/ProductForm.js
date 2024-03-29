import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import ProductContext from "../state/ProductContext";

function ProductForm({ product }) {
  const { createProduct, updateProduct } = useContext(ProductContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (product) {
      updateProduct(product?.id, data);
    } else {
      createProduct(data);
    }
  };
  console.log(watch("file")); // watch input value by passing the name of it
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name: </label>
      <input
        defaultValue={product?.name}
        {...register("name", { required: true })}
      />
      {errors.name && <span>This field is required</span>}
      <label>Price: </label>
      <input
        defaultValue={product?.price}
        {...register("price", { required: true })}
      />
      {errors.price && <span>This field is required</span>}
      <label>Description: </label>
      <textarea
        defaultValue={product?.description}
        {...register("description")}
      />
      <label>Image: </label>
      <input defaultValue={product?.image} {...register("image")} />
      <input type="file" {...register("file")} />

      <input value="Submit" type="submit" />
    </form>
  );
}

export default ProductForm;
