import { Route, Routes, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/*" element={<Navigate to="/products" />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
