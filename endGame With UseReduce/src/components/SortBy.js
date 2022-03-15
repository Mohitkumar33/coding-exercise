import { useFilters } from "../context";

const SortBy = () => {
  const { state, dispatch } = useFilters();
  return (
    <>
      <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            value="PRICE_HIGH_TO_LOW"
            onChange={(e) =>
              dispatch({ ...state, sortByPrice: e.target.value })
            }
          />
          Price-High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="PRICE_LOW_TO_HIGH"
            onChange={(e) =>
              dispatch({ ...state, sortByPrice: e.target.value })
            }
          />
          Price- Low to High
        </label>
      </fieldset>
    </>
  );
};

export { SortBy };
