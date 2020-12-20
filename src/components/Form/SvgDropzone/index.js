import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";

function SvgDropzone({ upload }) {
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: "image/svg+xml",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[acceptedFiles.length - 1]);
      upload(acceptedFiles[acceptedFiles.length - 1]);
    },
  });

  return (
    <div {...getRootProps()}>
      <Button variant="primary">
        <input {...getInputProps()} />

        {file ? file.name : "Upload svg"}
      </Button>
    </div>
  );
}

export default SvgDropzone;
