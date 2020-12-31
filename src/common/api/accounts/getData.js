import axios from "axios";

export default function create(accountId) {
  return axios.post(
    `https://bot.sportsbookscout.com/run-bot-for-id`,
    {
      id: accountId,
    },
  );
}
