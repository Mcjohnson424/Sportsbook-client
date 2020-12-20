
export default function getProfit ( bets = [] ) {
    
    const payoutSum = bets.reduce((acc, cur) => acc + cur.payout, 0);

    const betAmountSum = bets.reduce((acc, cur) => acc + cur.bet_amount, 0);
    const profit = payoutSum - betAmountSum;

    return profit;
  
}
  
 