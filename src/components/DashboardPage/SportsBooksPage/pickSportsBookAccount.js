import pick from "lodash/pick";

export default (data) =>
  pick(data, ["username", "hashed_pw", "state", "sportsbook_id"]);
