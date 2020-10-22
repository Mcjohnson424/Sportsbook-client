import React, { useStatus, useEffect } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Select from "react-select";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const BetTypeInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.betTypes.get);
  if (loading) return <Loading />;
  const options =
    data.map((c) => ({ value: c.id, label: c.bet_type_name })) || [];
  const handleChange = (data, event) => {
    if (event.action === "select-option") {
      onChange("bet_type_id", data.value);
    }
    if (event.action === "clear") {
      onChange("bet_type_id", null);
    }
  };
  return (
    <Form.Group controlId="forStatusId">
      {error && <Error error={error} />}
      <Form.Label>
        Bet Type{" "}
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          overlay={<Tooltip id={`tooltip-right`}>Moneyline, Spread, Total, etc.</Tooltip>}
        >
          <i className="fas fa-info-circle"></i>
        </OverlayTrigger>
      </Form.Label>
      <Select
        options={options}
        value={options.find((o) => o.value === value) || null}
        onChange={handleChange}
        isClearable={true}
      />
    </Form.Group>
  );
};

export default BetTypeInput;
