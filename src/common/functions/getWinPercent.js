export default function getWinPercent(bets = []) {
  if (bets.length <= 0) return 0;
  return bets.filter((b) => b.result === "won") / bets.length;
}
