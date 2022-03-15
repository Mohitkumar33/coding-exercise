import { React, useState } from "react";
import "./styles.css";

import { data } from "./data";

import { SortBy } from "./components/SortBy";
import { Filters } from "./components/Filters";

import { DisplayData } from "./components/DisplayData";

export default function App() {
  const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  const [includeOnlyFastDelivery, setIncludeOnlyFastDelivery] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(null);

  const filterByInStock = (includeOutOfStock, data) => {
    if (includeOutOfStock === true) {
      return data;
    }
    return data.filter(({ inStock }) => inStock === true);
  };

  const filterByFastDelivery = (includeOnlyFastDelivery, data) => {
    if (includeOnlyFastDelivery === true) {
      return data.filter(({ fastDelivery }) => fastDelivery === true);
    }
    return data;
  };

  const filterByPrice = (sortByPrice, data) => {
    if (sortByPrice === "PRICE_LOW_TO_HIGH") {
      return data.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "PRICE_HIGH_TO_LOW") {
      return data.sort((a, b) => b.price - a.price);
    }
    return data;
  };

  const dataAfterFastDelivery = filterByFastDelivery(
    includeOnlyFastDelivery,
    data
  );
  const dataAfterInStock = filterByInStock(
    includeOutOfStock,
    dataAfterFastDelivery
  );
  const finalProducts = filterByPrice(sortByPrice, dataAfterInStock);
  return (
    <>
      <SortBy setSortByPrice={setSortByPrice} />
      <Filters
        setIncludeOutOfStock={setIncludeOutOfStock}
        setIncludeOnlyFastDelivery={setIncludeOnlyFastDelivery}
        includeOutOfStock={includeOutOfStock}
        includeOnlyFastDelivery={includeOnlyFastDelivery}
      />
      <h2>All Products</h2>
      <DisplayData data={finalProducts} />
    </>
  );
}
