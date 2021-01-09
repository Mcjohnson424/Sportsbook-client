import React from "react";
import { Table } from "react-bootstrap";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import get from "lodash/get";

export default function BetTable({ bets = [] }) {
  console.log(bets);
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Bet Date</th>
          <th>Bet Amount</th>
          <th>Bet Target</th>
          <th>Bet Type</th>
          <th>Handicap</th>
          <th>American Odds</th>
          <th>Result</th>
          <th>Profit</th>
          <th>Event</th>
          <th>Event Date</th>
          <th>League </th>
          <th>Sport </th>

          <th>Bet Category</th>
          <th>Sportsbook</th>
        </tr>
      </thead>
      <tbody>
        {bets.map((bet) => (
          <tr>
            <td>{format(parseISO(bet.date_time), "M/d/yyyy")}</td>
            <td>${bet.bet_amount.toFixed(2)}</td>
            <td>{bet.target_name}</td>
            <td>{get(bet, "bet_type.bet_type_name")}</td>
            <td>
              {get(bet, "bet_type.bet_type_name") === "Spread" && "+"}
              {bet.handicap}
            </td>
            <td>
              {bet.odds_american > 0 && "+"}
              {bet.odds_american}
            </td>
            <td>{get(bet, "result.result_name")}</td>
            <td>
              {bet.payout - bet.bet_amount > 0 && "+"}
              {bet.payout - bet.bet_amount < 0 && "-"}$
              {Math.abs(bet.payout - bet.bet_amount).toFixed(2)}
            </td>
            <td>{get(bet, "event.event_name")}</td>
            <td>
              {get(bet, "event.event_date_time")
                ? format(
                    parseISO(get(bet, "event.event_date_time")),
                    "M/d/yyyy"
                  )
                : ""}
            </td>
            <td>{get(bet, "league.league_name")}</td>
            <td>{get(bet, "sport.sport_name")}</td>
            <td>{get(bet, "bet_category.bet_category_name")}</td>
            <td>{get(bet, "sportsbook.name")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
