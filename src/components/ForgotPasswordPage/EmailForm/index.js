import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withFormik, Field } from "formik";
import * as yup from "yup";
import omit from "lodash/omit";
import * as ROUTES from "../../../constants/routes";

const schema = yup.object({
  email: yup.string().email().required(),
});

const EmailForm = ({
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
    <Form
      className="auth-form auth-form-reflow"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="text-center mb-4">
        <div className="mb-4">
          <img style={{ height: 64 }} src="/assets/images/Logo.png"></img>
        </div>
        <h1 className="h3"> Reset Your Password </h1>
      </div>
      <p className="mb-4">
        {" "}
        Tempora iusto officia magnam fugiat sequi aliquam cum consectetur
        aperiam beatae, rerum obcaecati ea.{" "}
      </p>
      <div className="form-group mb-4">
        <label className="d-block text-left" htmlFor="inputUser">
          Email
        </label>{" "}
        <Form.Control
          className="form-control form-control-lg"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          type="text"
          placeholder={"Email"}
        />
        <p className="text-muted">
          <small>We'll send password reset link to your email.</small>
        </p>
      </div>

      <div className="d-block d-md-inline-block mb-2">
        <Button
          className="btn btn-lg btn-block"
          variant="primary"
          disabled={!isValid}
          type="submit"
        >
          Reset password
        </Button>
      </div>
      <div className="d-block d-md-inline-block">
        <Link to={ROUTES.SIGN_IN.as()} className="btn btn-block btn-light">
          Return to signin
        </Link>
      </div>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (values) => {
    return values;
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(omit(values, ["error", "onSubmit", "provider"]));
  },
  validationSchema: schema,
})(EmailForm);
