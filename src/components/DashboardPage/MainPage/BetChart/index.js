import React from "react";
import { Chart } from 'react-chartjs-2';

export default function BetChart({ bets = [] }) {
  console.log(bets)
 
  return (
    <canvas id="myChart" width="400" height="400">

    </canvas>
  );
}
