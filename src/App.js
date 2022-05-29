import { Route, Routes, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/*" element={<Navigate to="/products" />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
