import { React } from "react";
import "./styles.css";

import { data } from "./data";

import { SortBy } from "./components/SortBy";
import { Filters } from "./components/Filters";
import { PriceRange } from "./components/PriceRange";

// importing utilities

import {
  dataAfterPriceRange,
  filterByFastDelivery,
  filterByInStock,
  filterByPrice
} from "./utilities/index";

import { DisplayData } from "./components/DisplayData";
import { useFilters } from "./context";

export default function App() {
  const { state } = useFilters();
  // const [includeOutOfStock, setIncludeOutOfStock] = useState(false);
  // const [includeOnlyFastDelivery, setIncludeOnlyFastDelivery] = useState(false);
  // const [sortByPrice, setSortByPrice] = useState(null);
  // const [priceRange, setPriceRange] = useState(5000);

  const dataAfterFastDelivery = filterByFastDelivery(
    state.includeOnlyFastDelivery,
    data
  );
  const dataAfterInStock = filterByInStock(
    state.includeOutOfStock,
    dataAfterFastDelivery
  );
  const dataAfterSort = filterByPrice(state.sortByPrice, dataAfterInStock);

  const finalProducts = dataAfterPriceRange(state.priceRange, dataAfterSort);
  return (
    <>
      <h3>Total Products:{finalProducts.length}</h3>
      <SortBy />
      <Filters />
      <PriceRange />
      <h2>All Products</h2>
      <DisplayData data={finalProducts} />
    </>
  );
}
