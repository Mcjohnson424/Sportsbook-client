export default function getImpliedWinPercent(bets = []) {
  return 1 / bets.reduce((acc, cur) => acc + cur.decimal_odds, 0);
}
