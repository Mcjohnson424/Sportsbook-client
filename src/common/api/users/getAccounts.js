import api from "../../../api";
import queryString from "query-string";

export default function getAcounts(params, query) {
  return api.get(
    `/users/${params.userId}/accounts${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
