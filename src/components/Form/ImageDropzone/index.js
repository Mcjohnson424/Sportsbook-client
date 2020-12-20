import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";

function ImageDropzone({
  upload,
  previewUrl = "",
  previewUrls = [],
  title,
  previewStyle
}) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
      upload(acceptedFiles[acceptedFiles.length - 1]);
    }
  });
  const urls = [];
  if (files.length < 1) {
    if (previewUrls) urls.push(...previewUrls);
    if (previewUrl) urls.push(previewUrl);
  }
  const url = [...urls, ...files.map(file => file.preview)].pop();

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const styleWithImage = {};
  if (url) {
    styleWithImage.backgroundImage = `url(${url})`;
    styleWithImage.backgroundSize = "cover";
  }
  return (
    <section className="d-flex flex-column align-items-center justify-content-center">
      <h3>{title}</h3>
      {!url ? (
        <div
          className={`${previewStyle} dropzone-preview d-flex justify-content-center`}
        >
          <i className="fa fa-lg fa-image" />
          Upload
        </div>
      ) : (
        <div
          className={`${previewStyle} dropzone-preview`}
          style={{ ...styleWithImage }}
        />
      )}
      <div
        {...getRootProps({
          className: ` dropzone mt-3`
        })}
      >
        <div>
          <Button variant="primary">Upload image</Button>
        </div>

        <input {...getInputProps()} />
      </div>
    </section>
  );
}

export default ImageDropzone;
