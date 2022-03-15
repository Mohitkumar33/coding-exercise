import { createContext, useContext, useState } from "react";

const defaultContextValue = { items: 7, logger: () => console.log(`carting`) };

const CartContext = createContext(defaultContextValue);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);

  const addToCart = () => {
    setItems((items) => items + 1);
  };

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
