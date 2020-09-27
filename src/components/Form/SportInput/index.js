import React, { useStatus, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const SportInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.sports.get);
  if (loading) return <Loading />;
  return (
    <Form.Group controlId="forSportId">
      {error && <Error error={error} />}
      <Form.Label>Sport</Form.Label>
      <Form.Control
        name="sport_id"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.sport_name}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default SportInput;
