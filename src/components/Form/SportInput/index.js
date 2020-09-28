import React, { useStatus, useEffect } from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Select from "react-select";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const SportInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.sports.get);
  if (loading) return <Loading />;
  const options = data.map((c) => ({ value: c.id, label: c.sport_name })) || [];
  const handleChange = (data, event) => {
    if (event.action === "select-option") {
      onChange("sport_id", data.value);
    }
    if (event.action === "clear") {
      onChange("sport_id", null);
    }
  };
  return (
    <Form.Group controlId="forStatusId">
      {error && <Error error={error} />}
      <Form.Label>
        Sport{" "}
        <OverlayTrigger
          key={"right"}
          placement={"right"}
          overlay={<Tooltip id={`tooltip-right`}>Tooltip.</Tooltip>}
        >
          <i className="fas fa-info-circle"></i>
        </OverlayTrigger>
      </Form.Label>
      <Select
        options={options}
        value={options.find((o) => o.value === value)}
        onChange={handleChange}
        isClearable={true}
      />
    </Form.Group>
  );
};

export default SportInput;
