import React, { useStatus, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../Loading/index";
import api from "../../../common/api";
import Error from "../../Error";
import useFetchApi from "../../../hooks/useFetchApi";

const LeagueInput = ({ onChange, value = "", error: passedError }) => {
  const { data, loading, error } = useFetchApi(api.leagues.get);
  if (loading) return <Loading />;
  return (
    <Form.Group controlId="forLeagueId">
      {error && <Error error={error} />}
      <Form.Label>League</Form.Label>
      <Form.Control
        name="league_id"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.league_name}
          </option>
        ))}
         </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default LeagueInput;