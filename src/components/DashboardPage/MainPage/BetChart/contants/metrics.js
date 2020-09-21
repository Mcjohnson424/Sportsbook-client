import getProfit from "../../../../../common/functions/getProfit";
import getROI from "../../../../../common/functions/getROI";

export default [
  {
    title: "Bet Amount",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.bet_amount, 0),
    key: "bet_amount",
  },
  {
    title: "Potencial payout",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.potential_payout, 0),
    key: "potential_payout",
  },
  {
    title: "Payout",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.payout, 0),
    key: "payout",
  },
  {
    title: "Profit",
    parse: (bets) => getProfit(bets),
    key: "profit",
  },
  {
    title: "ROI",
    parse: (bets) => getROI(bets),
    key: "roi",
  },
];
