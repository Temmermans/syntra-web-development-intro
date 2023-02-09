import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price} euro</Card.Text>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCard;
