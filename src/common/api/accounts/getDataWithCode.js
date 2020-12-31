import axios from "axios";

export default function getDataWithCode(code) {
  return axios.post(` https://bot.sportsbookscout.com/input-2fa`, {
    code: code,
  });
}
