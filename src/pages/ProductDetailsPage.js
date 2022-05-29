import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/ProductDetails";

const ProductDetailsPage = () => {
  const params = useParams();

  const product = useSelector((state) =>
    state.store.products.find((prod) => prod.id === params.productId)
  );

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
