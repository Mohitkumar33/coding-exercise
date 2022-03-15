const filterByFastDelivery = (includeOnlyFastDelivery, data) => {
  if (includeOnlyFastDelivery === true) {
    return data.filter(({ fastDelivery }) => fastDelivery === true);
  }
  return data;
};

export { filterByFastDelivery };
