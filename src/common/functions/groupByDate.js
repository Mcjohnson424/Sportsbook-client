import parseISO from "date-fns/parseISO";
import isSameDay from "date-fns/isSameDay";
import addDays from "date-fns/addDays";

export default function groupByDate(bets) {
  if (bets.length > 0) {
    const dates = [];
    const minDate = parseISO(
      bets.reduce((acc, cur) => (acc.date_time > cur.date_time ? cur : acc))
        .date_time
    );
    dates.push(minDate);
    const maxDate = parseISO(
      bets.reduce((acc, cur) =>
        parseISO(acc.date_time) < parseISO(cur.date_time) ? cur : acc
      ).date_time
    );
    while (dates[dates.length - 1] < maxDate) {
      dates.push(addDays(dates[dates.length - 1], 1));
    }
    return {
      dates,
      bets: dates.map((date) =>
        bets.filter((bet) => isSameDay(parseISO(bet.date_time), date))
      ),
    };
  } else {
    return { bets: [], dates: [] };
  }

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
