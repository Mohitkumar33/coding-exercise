import { useFilters } from "../context";

const Filters = () => {
  const { state, dispatch } = useFilters();
  return (
    <>
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            checked={state.includeOutOfStock}
            onChange={(e) =>
              dispatch({ ...state, includeOutOfStock: e.target.checked })
            }
          />
          Include Out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={state.includeOnlyFastDelivery}
            onChange={(e) =>
              dispatch({ ...state, includeOnlyFastDelivery: e.target.checked })
            }
          />
          Fast Delivery Only
        </label>
      </fieldset>
    </>
  );
};

export { Filters };
