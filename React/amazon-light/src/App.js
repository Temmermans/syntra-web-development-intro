import React from "react";
import { ThemeProvider } from "./state/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { ProductProvider } from "./state/ProductContext";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
