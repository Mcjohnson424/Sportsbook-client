import api from "../../../api";
import queryString from "query-string";

export default function getBets(params, query) {
  return api.get(
    `/users/${params.userId}/bets${
      query
        ? `?${queryString.stringify(query, { arrayFormat: "bracket" })}`
        : ""
    }`
  );
}
