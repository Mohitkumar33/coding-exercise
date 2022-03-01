import React from "react";
import "./productsDisplay.css";

const ProductsComponent = ({ products, setCartItems, cartItems }) => {
  const addItemsToCart = (item) => {
    if (cartItems.some((element) => element.productId === item.productId)) {
      const index = cartItems.findIndex(
        (element) => element.productId === item.productId
      );
      console.log(index);
      setCartItems(
        (initialState) => [...initialState],
        (cartItems[index].quantity = cartItems[index].quantity + 1)
      );
    } else {
      const newItem = {
        productName: item.productName,
        productId: item.productId,
        quantity: 1,
        productPrice: item.productPrice
      };
      setCartItems((prevItemsInCart) => [...prevItemsInCart, newItem]);
    }
  };
  return (
    <div className="ProductsComponent">
      <h3>Available Products</h3>
      <div className="allProducts">
        {products.map((i) => (
          <div className="card" key={i.productId}>
            <p>{i.productName}</p>
            <p>{i.productPrice}₹</p>
            <button onClick={() => addItemsToCart(i)}>AddToCart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
