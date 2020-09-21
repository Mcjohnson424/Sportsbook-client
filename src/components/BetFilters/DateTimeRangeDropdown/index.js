import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import format from "date-fns/format";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import useEventFilteres from "../../../hooks/useBetFilters"; // theme css file

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
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className="app-search d-none d-lg-block"
    >
      <DropdownToggle
        data-toggle="dropdown"
        tag="button"
        className="dropdown-toggle btn btn-link"
        onClick={toggleDropdown}
        aria-expanded={dropdownOpen}
      >
        {`${format(filters.startDate, "d MMM")} - ${format(
          filters.endDate,
          "d MMM"
        )}`}
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-animated">
        <DateRangePicker
          ranges={[
            {
              startDate: filters.startDate,
              endDate: filters.endDate,
              key: "selection",
            },
          ]}
          onChange={handleSelect}
        />
      </DropdownMenu>
    </Dropdown>
  );
};

export default DateTimeRangeDropdown;
