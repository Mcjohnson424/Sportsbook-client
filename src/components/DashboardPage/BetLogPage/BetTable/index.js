import React from "react";
import { Table } from "react-bootstrap";

export default function BetTable({ bets = [] }) {
  console.log(bets)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Status</th>
          <th>Bet Type</th>
          <th>Bet Category</th>
          <th>Sport </th>
          <th>Bet target </th>
          <th>League </th>
        </tr>
      </thead>
      <tbody>
        {bets.map((bet) => (
          <tr>
            <td>{bet.status}</td>
            <td>{bet.bet_type_name}</td>
            <td>{bet.bet_category_name}</td>
            <td>{bet.sport_name}</td>
            <td>{bet.target_name}</td>
            <td>{bet.league_name}</td>
          </tr>
        ))}
      </tbody>

    </Table>
  );
}
