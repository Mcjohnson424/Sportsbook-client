import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import api from "../../../../common/api/index";
import CodeForm from "../CodeForm";
import Error from "../../../Error/index";
import Loading from "../../../Loading/index";

const CodeModal = ({ handleClose, callback, text, show }) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const onCancel = () => {
    handleClose();
  };
  const onSubmit = async (values) => {
    setLoading(true);
    setError(null);
    try {
      const { data: contact } = await api.accounts.getDataWithCode(values.code);
      if (callback) callback();
      handleClose();
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enter code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <Loading />
        ) : (
          <>
            {error && <Error error={error} />}
            <CodeForm onSubmit={onSubmit} onCancel={onCancel} />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CodeModal;
