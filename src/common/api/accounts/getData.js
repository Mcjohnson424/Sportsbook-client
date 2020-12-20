import axios from "axios";

export default function create(accountId) {
  return axios.post(`https://206.189.180.20/run-bot-for-id`, {
    id: accountId,
  });
}
