import "./styles.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/WishList";
import Products from "./pages/Products";
import { Routes, Link, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>||
      <Link to="/pd">Product Details</Link>||
      <Link to="/cart">Cart</Link>||
      <Link to="/products">Products</Link>||
      <Link to="/wishlist">WishList</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pd" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

// codesandbox link 
// https://codesandbox.io/s/react-router-install-exersise-done-f7q4fb?file=/src/index.js