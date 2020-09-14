import React, { useStatus, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const BetTargetInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.betTargets.get);
  if (loading) return <Loading />;
  return (
    <Form.Group controlId="forBetTargetyId">
      {error && <Error error={error} />}
      <Form.Label>Select your bet target</Form.Label>
      <Form.Control
        name="bet_target_id"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.bet_target_name}
          </option>
        ))}
         </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default BetTargetInput;