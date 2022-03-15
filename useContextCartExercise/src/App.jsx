import "./styles.css";
// import { CartProvider } from "./cart-context";

// import { useContext } from "react";
// import { CartContext } from "./cart-context";

import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}

// codesandbox link
// https://codesandbox.io/s/usecontext-exercise-3wigm0