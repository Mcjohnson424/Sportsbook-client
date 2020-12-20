import queryString from "query-string";
import api from "../../../api";

export default function get(query) {
  return api.get(
    `/betTargets${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
