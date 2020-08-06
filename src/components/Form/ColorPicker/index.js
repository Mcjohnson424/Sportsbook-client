import React, { useState, useRef } from "react";
import {
  Overlay,
  Popover,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { ChromePicker } from "react-color";
import rgb2hex from "../../../common/functions/rgba2hex";

function ColorPicker({ color, onChange }) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const hex = rgb2hex(color.r, color.g, color.b);
  return (
    <div ref={ref}>
      <InputGroup className="input-group-alt">
        <InputGroup.Prepend onClick={handleClick}>
          <span
            style={{ backgroundColor: hex }}
            className="input-group-text colorpicker-input-addon"
          >
            <i className="align-self-center"></i>
          </span>
        </InputGroup.Prepend>
        <FormControl value={hex} />
      </InputGroup>
      <Overlay
        show={show}
        target={target}
        placement="right"
        container={ref.current}
      >
        <Popover onMouseLeave={() => setShow(false)} id="popover-contained">
          <ChromePicker color={color} onChange={onChange} />
        </Popover>
      </Overlay>
    </div>
  );
}

export default ColorPicker;
