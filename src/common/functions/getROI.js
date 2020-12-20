import getProfit from "./getProfit";

export default function getROI(bets = []) {
  if(bets.length<=0)
    return 0;
  const profit = getProfit(bets);

  const betAmountSum = bets.reduce((acc, cur) => acc + cur.bet_amount, 0);
  const roi = profit / betAmountSum;

  return roi;
}
