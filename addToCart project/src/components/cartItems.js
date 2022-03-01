import React from "react";
import "./cartItems.css";

const CartComponent = ({ cartItems }) => {
  return (
    <div className="CartComponent">
      <h3> Cart Items </h3>
      <div className="cart-allProducts">
        {cartItems.map((i) => (
          <div className="cart-card" key={i.productId}>
            <p>{i.productName}</p>
            <p>{i.productPrice}₹</p>
            <p>{i.quantity}</p>
            <p>{i.quantity * i.productPrice}₹</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
