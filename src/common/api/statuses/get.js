import queryString from "query-string";
import api from "../../../api";

export default function get(query) {
  return api.get(
    `/statuses${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
