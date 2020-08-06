import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const StateInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.states.get);

  if (loading) return <Loading />;
  return (
    <Form.Group controlId="forPlanId">
      {error && <Error error={error} />}
      <Form.Label>Select your state</Form.Label>
      <Form.Control
        name="state"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {data.map((item) => (
          <option key={item.id} value={item.state_name}>
            {item.state_name}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default StateInput;
