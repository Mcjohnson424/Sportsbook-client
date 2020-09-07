import React from "react";
import { Table } from "react-bootstrap";

export default function BetTable({ bets = [] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {bets.map((bet) => (
          <tr>
            <td>{bet.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
