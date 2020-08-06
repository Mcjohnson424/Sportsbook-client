import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import omit from "lodash/omit";
import Error from "../../Error";
import equalTo from "../../../common/yup/equalTo";
import passwordPattern from "../../../common/yup/passwordPattern";

yup.addMethod(yup.string, "equalTo", equalTo);

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      passwordPattern,
      "The password must contain at least 1 lowercase alphabetical character, 1 number and  must be 8 characters or longer"
    ),
  confirmPassword: yup
    .string()
    .equalTo(yup.ref("password"), "Passwords must match")
    .required(),
});

const SignUpForm = ({
  t,
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
    <Form className="auth-form auth-form-lg" noValidate onSubmit={handleSubmit}>
      {values.error && <Error error={values.error} />}
      <Form.Group controlId="formFirstName">
        <Form.Control
          type="text"
          placeholder={"First Name"}
          value={values.first_name || ""}
          name="first_name"
          onChange={handleChange}
          isInvalid={!!errors.first_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.first_name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Control
          type="text"
          placeholder={"Last Name"}
          value={values.last_name || ""}
          name="last_name"
          onChange={handleChange}
          isInvalid={!!errors.last_name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.last_name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Control
          type="email"
          placeholder={"Email"}
          value={values.email || ""}
          name="email"
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Control
          type="password"
          placeholder={"Password"}
          value={values.password || ""}
          name="password"
          onChange={handleChange}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formConfirmPassword">
        <Form.Control
          type="password"
          placeholder={"Confirm Password"}
          value={values.confirmPassword || ""}
          name="confirmPassword"
          onChange={handleChange}
          isInvalid={!!errors.confirmPassword}
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="formBirthDate">
        <Button
          className="btn-lg btn-block"
          variant="primary"
          type="submit"
          disabled={!isValid}
        >
          Sign Up
        </Button>
      </Form.Group>
      <div className="form-group text-center">
        <div className="custom-control custom-control-inline custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="newsletter"
          />{" "}
          <label className="custom-control-label" htmlFor="newsletter">
            Sign me up for the newsletter
          </label>
        </div>
      </div>
      <p className="text-center text-muted mb-0">
        {" "}
        By creating an account you agree to the <a href="#">
          Terms of Use
        </a> and <a href="#">Privacy Policy</a>.{" "}
      </p>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (values) => {
    return values;
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(omit(values, ["error", "onSubmit"]));
  },
  validationSchema: schema,
})(SignUpForm);
