import { useContext, createContext, useReducer } from "react";

const filterOperations = createContext(null);

const reducerFunc = (state, action) => {
  return action;
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    includeOutOfStock: false,
    includeOnlyFastDelivery: false,
    sortByPrice: null,
    priceRange: 5000
  });
  return (
    <filterOperations.Provider value={{ state, dispatch }}>
      {children}
    </filterOperations.Provider>
  );
};

const useFilters = () => useContext(filterOperations);

export { FilterProvider, useFilters };
