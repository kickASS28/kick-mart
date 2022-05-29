import React from "react";
import ProductList from "../components/products/ProductList";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage = () => {
  const isLoading = useSelector((state) => state.store.isLoading);
  const products = useSelector((state) => state.store.products);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <ProductList products={products} header="All Products" />;
};

export default HomePage;
