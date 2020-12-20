import React, { useState } from "react";
import BetContext from "../contexts/BetContext";
import addDays from "date-fns/addDays";
import useFetchApi from "../hooks/useFetchApi";
import api from "../common/api";

export default (WrappedPage) => {
  const WithBetFilters = ({ ...props }) => {
    const [filters, setFilters] = useState({
      startDate: addDays(new Date(), -6),
      endDate: new Date(),
    });
    const { data: statuses } = useFetchApi(api.statuses.get);
    const { data: betTypes } = useFetchApi(api.betTypes.get);
    const { data: betCategories } = useFetchApi(api.betCategories.get);
    const { data: sports } = useFetchApi(api.sports.get);
    const { data: betTargets } = useFetchApi(api.betTargets.get);
    const { data: leagues } = useFetchApi(api.leagues.get);
    const { data: sportbooks } = useFetchApi(api.sportsbooks.get);
    return (
      <BetContext.Provider
        value={{
          filters,
          setFilters,
          statuses,
          betTypes,
          betCategories,
          sports,
          betTargets,
          leagues,
          sportbooks,
        }}
      >
        <WrappedPage {...props} />
      </BetContext.Provider>
    );
  };
  return WithBetFilters;
};
