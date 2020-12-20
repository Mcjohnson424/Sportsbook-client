import React from "react";
import ReactDOM from "react-dom";

import { AuthProvider } from "./react-check-auth";

import "./index.scss";

import { apiDomainUrl } from "./api";

import App from "./components/App";

ReactDOM.render(
  <AuthProvider authUrl={`${apiDomainUrl}/v1/sessionInfo`}>
      <App />
  </AuthProvider>,
  document.getElementById("root")
);
