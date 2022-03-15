const Filters = ({
  includeOutOfStock,
  includeOnlyFastDelivery,
  setIncludeOnlyFastDelivery,
  setIncludeOutOfStock
}) => {
  return (
    <>
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            checked={includeOutOfStock}
            onChange={(e) => setIncludeOutOfStock(e.target.checked)}
          />
          Include Out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeOnlyFastDelivery}
            onChange={(e) => setIncludeOnlyFastDelivery(e.target.checked)}
          />
          Fast Delivery Only
        </label>
      </fieldset>
    </>
  );
};

export { Filters };
