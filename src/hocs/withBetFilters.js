import React, { useState } from "react";
import BetContext from "../contexts/BetContext";
import endOfMonth from "date-fns/endOfMonth";
import startOfMonth from "date-fns/startOfMonth";

export default (WrappedPage) => {
  const WithBetFilters = ({ ...props }) => {
    const [filters, setFilters] = useState({
      startDate: startOfMonth(new Date()),
      endDate: endOfMonth(new Date()),
    });
    return (
      <BetContext.Provider value={{ filters, setFilters }}>
        <WrappedPage {...props} />
      </BetContext.Provider>
    );
  };
  return WithBetFilters;
};
