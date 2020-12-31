import React from "react";
import { Table } from "react-bootstrap";
import get from "lodash/get";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default function BetTable({ bets = [] }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Bet date</th>
          <th>Event name</th>
          <th>Event date</th>
          <th>Bet target </th>
          <th>Bet amount </th>
          <th>American odds </th>
          <th>Potential payout</th>
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
            <td>{get(bet, "event.event_name")}</td>
            <td>
              {get(bet, "event.event_date_time")
                ? format(
                    parseISO(get(bet, "event.event_date_time")),
                    "M/d/yyyy"
                  )
                : null}
            </td>
            <td>{bet.target_name}</td>
            <td>{bet.bet_amount}</td>
            <td>{bet.odds_american}</td>
            <td>{bet.potential_payout}</td>
            <td>{get(bet, "league.league_name")}</td>
            <td>{get(bet, "sport.sport_name")}</td>
            <td>{bet.bet_type_name}</td>
            <td>{bet.bet_category_name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
