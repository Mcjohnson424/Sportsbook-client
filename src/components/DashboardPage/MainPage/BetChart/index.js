import React from "react";
import { Line } from 'react-chartjs-2';

export default function BetChart({ bets = [] }) {
  console.log(bets)
 

  return (
    <Line data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
      }]
  }}> </Line>



  );
}
