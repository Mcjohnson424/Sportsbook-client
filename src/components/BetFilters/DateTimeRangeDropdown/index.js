import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import format from "date-fns/format";
import { DateRangePicker } from "react-date-range";
import { enGB } from "react-date-range/dist/locale";
import useEventFilteres from "../../../hooks/useBetFilters"; // theme css file

import staticRangesGenerator from "./staticRanges";

const staticRanges = staticRangesGenerator(enGB);

const DateTimeRangeDropdown = () => {
  const { filters, setFilters } = useEventFilteres();
  const handleSelect = (ranges) => {
    setFilters({
      ...filters,
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
  };
  const [dropdownOpen, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdownOpen);
  };
  return (
    <>
      <p className="mb-1">Bet Date</p>
      <Button onClick={toggleDropdown}>
        {" "}
        {`${format(filters.startDate, "d MMM")} - ${format(
          filters.endDate,
          "d MMM"
        )}`}
      </Button>

      {dropdownOpen && (
        <DateRangePicker
          weekStartsOn={1}
          className="picker"
          ranges={[
            {
              startDate: filters.startDate,
              endDate: filters.endDate,
              key: "selection",
            },
          ]}
          onChange={handleSelect}
          staticRanges={staticRanges}
        />
      )}
    </>
  );
};

export default DateTimeRangeDropdown;
