const dataAfterPriceRange = (priceRange, data) => {
  console.log(typeof data[0].price);
  return data.filter(({ price }) => Number(price) <= priceRange);
};
export { dataAfterPriceRange };
