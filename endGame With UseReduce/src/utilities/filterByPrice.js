const filterByPrice = (sortByPrice, data) => {
  if (sortByPrice === "PRICE_LOW_TO_HIGH") {
    return data.sort((a, b) => a.price - b.price);
  } else if (sortByPrice === "PRICE_HIGH_TO_LOW") {
    return data.sort((a, b) => b.price - a.price);
  }
  return data;
};

export { filterByPrice };
