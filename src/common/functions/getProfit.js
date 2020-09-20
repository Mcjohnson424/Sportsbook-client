
export default function getProfit ({ bets = [] }) {
    
    const payoutSum = bets.reduce((total, bet) => total + bet, 0); 

    const betAmountSum = bets.reduce((total, bet) => total + bet,0); 
    const profit = payoutSum - betAmountSum;

    return profit;
  
}
  
 