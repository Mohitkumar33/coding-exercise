const filterByInStock = (includeOutOfStock, data) => {
  if (includeOutOfStock === true) {
    return data;
  }
  return data.filter(({ inStock }) => inStock === true);
};

export { filterByInStock };
