import { Route, Routes, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";
import Commerce from "@chec/commerce.js";
import { APIKey } from "./constants/constants";
import { useDispatch } from "react-redux";
import { storeActions } from "./store/store";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const dispatch = useDispatch();
  const commerce = new Commerce(APIKey);

  commerce.products
    .list()
    .then((product) => dispatch(storeActions.setProducts(product.data)));
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/*" element={<Navigate to="/products" />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </main>
  );
}
export default App;
