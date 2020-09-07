import React, { useState } from "react";
import BetContext from "../contexts/BetContext";

export default (WrappedPage) => {
  const WithBetFilters = ({ ...props }) => {
    const [filters, setFilters] = useState({});
    return (
      <BetContext.Provider value={{ filters, setFilters }}>
        <WrappedPage {...props} />
      </BetContext.Provider>
    );
  };
  return WithBetFilters;
};
