import axios from "axios";

export default function create(accountId, sportsbook) {

  if (sportsbook.id === "c5c535a1-7d3d-4125-8b00-451b88865b6d") {
    return axios.post(`https://bot.sportsbookscout.com/run-fanduel`, {
      id: accountId,
      state: sportsbook.state,
    });
  } else {
    return axios.post(`https://bot.sportsbookscout.com/run-draftkings`, {
      id: accountId,
      state: sportsbook.state,
    });
  }
}
