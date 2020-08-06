import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const SportBookInput = ({
  onChange,
  value = "",
  error: passedError,
  state,
}) => {
  const { data, loading, error } = useFetchApi(api.sportsbooks.get);
  if (loading) return <Loading />;
  return (
    <Form.Group controlId="forPlanId">
      {error && <Error error={error} />}
      <Form.Label>Select your sport book</Form.Label>
      <Form.Control
        name="sportsbook_id"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {state &&
          data
            .filter((book) => book.state === state)
            .map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default SportBookInput;
