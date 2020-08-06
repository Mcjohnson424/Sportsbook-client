import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Loading from "../../Loading/index";
import templateApi from "../../../common/api/templates";
import Error from "../../Error";
import get from "lodash/get";

const TemplateInput = ({
  onChange,
  value = "",
  error: passedError,
  name = "template",
  setFieldValue,
}) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getTemplates = () =>
    templateApi
      .get()
      .then((result) => {
        setLoading(false);
        if (result.data) {
          setTemplates(result.data);
        } else {
          setTemplates([]);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  useEffect(() => {
    setLoading(true);
    setError(null);
    getTemplates();
  }, []);

  if (loading) return <Loading />;

  return (
    <Form.Group as={Row} controlId="formTemplate">
      <Form.Label column>Start with ready-made template</Form.Label>
      <Col lg={7} md={7} sm={7} sx={7}>
        <Form.Control
          name={name}
          as="select"
          value={value.id || ""}
          onChange={(e) =>
            setFieldValue(
              name,
              templates.find((template) => template.id === e.target.value)
            )
          }
          isInvalid={!!(error || passedError)}
        >
          <option>Fancy</option>
          {templates.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {error || passedError}
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default TemplateInput;
