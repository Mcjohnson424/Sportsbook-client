import React from "react";
import { Table } from "react-bootstrap";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default function BetTable({ bets = [] }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Bet date</th>
          <th>Bet amount</th>
          <th>Bet target</th>
          <th>American odds</th>
          <th>Result</th>
          <th>Payout</th>
          <th>League </th>
          <th>Sport </th>
          <th>Bet Type</th>
          <th>Bet Category</th>
        </tr>
      </thead>
      <tbody>
        {bets.map((bet) => (
          <tr>
            <td>{format(parseISO(bet.date_time), "M/d/yyyy")}</td>
            <td>{bet.bet_amoount}</td>
            <td>{bet.target_name}</td>
            <td>{bet.odds_american}</td>
            <td>{bet.result}</td>
            <td>{bet.payout}</td>
            <td>{bet.league_name}</td>
            <td>{bet.sport_name}</td>
            <td>{bet.bet_type_name}</td>
            <td>{bet.bet_category_name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
