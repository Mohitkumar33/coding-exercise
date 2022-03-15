const SortBy = ({ setSortByPrice }) => {
  return (
    <>
      <fieldset>
        <legend>Sort By</legend>
        <label>
          <input
            type="radio"
            name="sort"
            value="PRICE_HIGH_TO_LOW"
            onChange={(e) => setSortByPrice(e.target.value)}
          />
          Price-High to Low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="PRICE_LOW_TO_HIGH"
            onChange={(e) => setSortByPrice(e.target.value)}
          />
          Price- Low to High
        </label>
      </fieldset>
    </>
  );
};

export { SortBy };
