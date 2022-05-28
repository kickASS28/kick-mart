import React from "react";
import ProductList from "../components/products/ProductList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector((state) => state.store.products);
  console.log(products);
  return <ProductList products={[...products, ...products]} />;
};

export default HomePage;