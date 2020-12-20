import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import get from "lodash/get";


const schema = yup.object({
  username: yup.string().required(),
  hashed_pw: yup.string().required(),
});

const SportsBooksAccountGetDataForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  touched,
  isValid,
  errors,
  setFieldValue,
}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={get(values, "username") || ""}
            name="username"
            onChange={handleChange}
            isInvalid={!!get(errors, "username")}
          />
          <Form.Control.Feedback type="invalid">
            {get(errors, "username")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formHashedPw">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={get(values, "hashed_pw") || ""}
            name="hashed_pw"
            onChange={handleChange}
            isInvalid={!!get(errors, "hashed_pw")}
          />
          <Form.Control.Feedback type="invalid">
            {get(errors, "hashed_pw")}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-3 btn-focal btn-lg"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: (values) => {
    return values.customer || {};
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
  validationSchema: schema,
})(SportsBooksAccountGetDataForm);
