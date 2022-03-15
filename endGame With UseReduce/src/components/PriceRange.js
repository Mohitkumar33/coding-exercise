import { useFilters } from "../context";

const PriceRange = () => {
  const { state, dispatch } = useFilters();
  return (
    <>
      <fieldset>
        <legend>PriceRange</legend>
        <input
          type="range"
          id="points"
          name="points"
          min="0"
          max="5000"
          onChange={(e) => dispatch({ ...state, priceRange: e.target.value })}
        />
        <div>Price:{state.priceRange}</div>
      </fieldset>
    </>
  );
};

export { PriceRange };
