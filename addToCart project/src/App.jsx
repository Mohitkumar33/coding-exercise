import "./styles.css";
import ProductsComponent from "./components/productsDisplay";
import CartComponent from "./components/cartItems";
import { useState } from "react";

export default function App() {
  const products = [
    { productId: 1, productName: "Milk", productPrice: 100 },
    { productId: 2, productName: "bread", productPrice: 50 },
    { productId: 3, productName: "Butter", productPrice: 200 }
  ];
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <ProductsComponent
        products={products}
        setCartItems={setCartItems}
        cartItems={cartItems}
      />
      <CartComponent cartItems={cartItems} />
    </div>
  );
}

// codesandbox link
// https://codesandbox.io/s/addtocart-old9gu?file=/src/components/productsDisplay.js
