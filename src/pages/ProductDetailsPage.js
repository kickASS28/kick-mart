import React from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductDetails from "../components/products/ProductDetails";

const ProductDetailsPage = () => {
  const isLoading = useSelector((state) => state.store.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <ProductDetails />;
};

export default ProductDetailsPage;
