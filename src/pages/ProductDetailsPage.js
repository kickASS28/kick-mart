import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/products/ProductDetails";
import { fetchProductsAndCats } from "../store/store";

const ProductDetailsPage = () => {
  const params = useParams();

  const products = useSelector((state) =>
    state.store.products.find((prod) => prod.id === params.productId)
  );

  const dispatch = useDispatch();

  if (!products) {
    dispatch(fetchProductsAndCats());
  }

  return <ProductDetails product={products} />;
};

export default ProductDetailsPage;
