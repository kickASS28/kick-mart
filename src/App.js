import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Commerce from "@chec/commerce.js";
import { APIKey } from "./constants/constants";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";
import { storeActions } from "./store/store";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const ProductDetailsPage = React.lazy(() =>
  import("./pages/ProductDetailsPage")
);
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const Navigation = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.store.isLoading);
  const commerce = new Commerce(APIKey);

  commerce.products.list().then((product) => {
    dispatch(storeActions.setLoading(true));
    dispatch(storeActions.setProducts(product.data));
    dispatch(storeActions.setLoading(false));
  });

  commerce.categories.list().then((category) => {
    dispatch(storeActions.setLoading(true));
    dispatch(storeActions.setCategories(category.data));
    dispatch(storeActions.setLoading(false));
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/products" element={<HomePage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </>
  );
}
export default App;
