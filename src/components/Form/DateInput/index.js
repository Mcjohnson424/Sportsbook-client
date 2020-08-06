import React, { useState } from "react";
import format from "date-fns/format";
import { Form } from "react-bootstrap";

const DATE_FORMAT = "yyyy-MM-dd";

const formatDate = value => format(value, DATE_FORMAT);

const FormikDate = ({ name, onChange, value = "", isInvalid }) => {
  const onFieldChange = value => {
    let dateValue = value;
    if (value instanceof Date) {
      dateValue = formatDate(value);
    }
    onChange(name, dateValue);
  };

  return (
    <Form.Control
      type="date"
      value={value || ""}
      name={name}
      onChange={e => onFieldChange(e.target.value)}
      isInvalid={isInvalid}
    />
  );
};

export default FormikDate;
