import React, { useState } from "react";
import DateTime from "react-datetime-picker/dist/entry.nostyle";
import format from "date-fns/format";

const DATE_FORMAT = "DD-MM-YYYY HH:mm";

const formatDate = value => format(value, DATE_FORMAT);

const FormikDateTime = ({ field, form, initialValue }) => {
  const [input, setInput] = useState(
    initialValue ? new Date(initialValue) : new Date()
  );
  const onFieldChange = value => {
    let dateValue = value;
    setInput(value);

    // TODO: Test the change from checking if instance of moment
    if (value instanceof Date) {
      dateValue = formatDate(value);
    }
    form.setFieldValue(field.name, dateValue);
  };

  return (
    <DateTime
      value={input || ""}
      id={field.name}
      name={field.name}
      onChange={onFieldChange}
      disableClock={true}
    />
  );
};

export default FormikDateTime;
