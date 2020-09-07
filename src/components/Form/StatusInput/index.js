import React, { useStatus, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const StatusInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.statuses.get);
  if (loading) return <Loading />;
  return (
    <Form.Group controlId="forStatusId">
      {error && <Error error={error} />}
      <Form.Label>Select your status</Form.Label>
      <Form.Control
        name="status_id"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.status_name}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default StatusInput;
