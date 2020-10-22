import getProfit from "../../../../../common/functions/getProfit";
import getROI from "../../../../../common/functions/getROI";

export default [
  {
    title: "Bets",
    parse: (bets) => bets.length,
    key: "bets",
  },
  {
    title: "Bet Amount",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.bet_amount, 0),
    key: "bet_amount",
  },
  /*{
    title: "Potencial payout",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.potential_payout, 0),
    key: "potential_payout",
  },
  {
    title: "Payout",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.payout, 0),
    key: "payout",
  },*/
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
  {
    title: "Cumulative Bets",
    parse: (bets) => bets.length,
    key: "c_bets",
    isAcc: true,
  },
  {
    title: "Cumulative Bet Amount",
    parse: (bets) => bets.reduce((acc, b2) => acc + b2.bet_amount, 0),
    key: "c_bet_amount",
    isAcc: true,
  },
  {
    title: "Cumulative Profit",
    parse: (bets) => getProfit(bets),
    key: "c_profit",
    isAcc: true,
  },
  {
    title: "Cumulative ROI",
    parse: (bets) => getROI(bets),
    key: "c_roi",
    isAcc: true,
  },
];
