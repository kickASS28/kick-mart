import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
const ProductDetailsPage = React.lazy(() =>
  import("./pages/ProductDetailsPage")
);
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const Navigation = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
function App() {
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
