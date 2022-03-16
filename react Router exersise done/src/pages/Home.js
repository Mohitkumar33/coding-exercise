import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h1> This is Home </h1>
      <Link to="/wishlist">Go to wishlist</Link>
    </>
  );
}
