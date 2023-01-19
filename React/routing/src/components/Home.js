import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to={"/products"}>Go to products</Link>
    </div>
  );
}

export default Home;
