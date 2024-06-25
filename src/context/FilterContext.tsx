import React, { createContext, useContext } from "react";

export interface Filters {
  size: string[];
  color: string[];
  collection: string[];
  typeOfProduct: string[];
}

interface FilterContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  clearFilters: () => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
