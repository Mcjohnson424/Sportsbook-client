import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { withFormik } from "formik";
import * as yup from "yup";
import omit from "lodash/omit";
import get from "lodash/get";

const schema = yup.object({
  code: yup.string(),
});

const CodeForm = ({
  onCancel,
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
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="formStreet">
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          placeholder={"code"}
          value={get(values, "code") || ""}
          name="code"
          onChange={handleChange}
          isInvalid={!!get(errors, "code")}
        />
        <Form.Control.Feedback type="invalid">
          {get(errors, "code")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formButton">
        <Button
          className="btn-lg btn-block"
          variant="primary"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (values) => {
    return values;
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(omit(values, ["error", "onSubmit", "onCancel"]));
  },
  validationSchema: schema,
})(CodeForm);
