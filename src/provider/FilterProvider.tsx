import React, { useState } from "react";
import { FilterContext, Filters } from "../context/FilterContext";

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>({
    size: [],
    color: [],
    collection: [],
    typeOfProduct: [],
  });

  const clearFilters = () => {
    setFilters({
      size: [],
      color: [],
      collection: [],
      typeOfProduct: [],
    });
  };

  return (
    <FilterContext.Provider value={{ filters, setFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
