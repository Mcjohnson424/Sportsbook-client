import parseISO from "date-fns/parseISO";
import isSameDay from "date-fns/isSameDay";

export default function groupByDate(bets) {
  const result = [];
  bets.sort((b1, b2) => {
    if (isSameDay(parseISO(b1.date_time), parseISO(b2.date_time))) {
      return 0;
    }
    if (parseISO(b1.date_time) > parseISO(b2.date_time)) {
      return 1;
    }
    return -1;
  });
  bets.forEach((bet) => {
    const r = result.find((a) =>
      a.some((b) => isSameDay(parseISO(b.date_time), parseISO(bet.date_time)))
    );
    if (r) {
      r.push(bet);
    } else {
      result.push([bet]);
    }
  });
  return result;
}
