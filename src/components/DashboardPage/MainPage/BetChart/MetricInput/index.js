import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Loading from "../../../../Loading/index";
import Error from "../../../../Error";
import data from "../contants/metrics";

const MetricInput = ({ onChange, value = "", error: passedError }) => {
  return (
    <Form.Group controlId="forPlanId">
      <Form.Label>Metric</Form.Label>
      <Form.Control
        name="metric"
        as="select"
        value={value}
        onChange={onChange}
        isInvalid={!!passedError}
      >
        <option>Choose...</option>
        {data.map((item) => (
          <option key={item.key} value={item.key}>
            {item.title}
          </option>
        ))}
      </Form.Control>
      <Form.Control.Feedback type="invalid">
        {passedError}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default MetricInput;
