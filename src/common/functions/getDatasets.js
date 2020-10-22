import getRandomColor from "./getRandomColor";
import getProfit from "./getProfit";

export default function (
  { bets, dates },
  metric,
  dimension,
  statuses,
  betTypes,
  betCategories,
  sports,
  betTargets,
  leagues,
  sportbooks
) {
  const allBets = bets.reduce((acc, cur) => [...acc, ...cur], []);
  if (dimension && allBets.some((b) => b[dimension.key])) {
    const dimensions = [];
    allBets.forEach((bet) => {
      const d = dimensions.find((di) => di === bet[dimension.key]);
      if (!d && bet[dimension.key]) {
        dimensions.push(bet[dimension.key]);
      }
    });
    const datasets = dimensions.map((d) => {
      const color = getRandomColor();
      const g = bets.map((group) =>
        group.filter((bet) => bet[dimension.key] === d)
      );
      const data = bets.map((group) =>
        metric.parse(group.filter((bet) => bet[dimension.key] === d))
      );

      const result = {
        borderColor: color,
        data: data,
      };
      if (metric.key === "c_roi") {
        result.data = bets.map((g, i) => {
          const allBets = bets
            .slice(0, i)
            .map((group) => group.filter((bet) => bet[dimension.key] === d))
            .reduce((acc, cur) => [...acc, ...cur], []);
          const profilt = getProfit(allBets);
          const bet_amount = allBets.reduce(
            (acc, b2) => acc + b2.bet_amount,
            0
          );
          return profilt / bet_amount;
        });
      } else if (metric.isAcc) {
        result.data = data.map((d, i) =>
          data.slice(0, i).reduce((acc, cur) => acc + cur, 0)
        );
      }
      if (dimension.key === "sport_id") {
        result.label = sports.find((s) => s.id === d).sport_name;
      }
      if (dimension.key === "league_id") {
        result.label = leagues.find((s) => s.id === d).league_name;
      }
      if (dimension.key === "target_id") {
        result.label = betTargets.find((s) => s.id === d).target_name;
      }
      if (dimension.key === "bet_category_id") {
        result.label = betCategories.find((s) => s.id === d).bet_category_name;
      }
      if (dimension.key === "bet_type_id") {
        result.label = betTypes.find((s) => s.id === d).bet_type_name;
      }
      if (dimension.key === "sportsbook_id") {
        result.label = sportbooks.find((s) => s.id === d).name;
      }

      return result;
    });
    return datasets;
  } else {
    const color = getRandomColor();
    let data = bets.map((group) => metric.parse(group));
    if (metric.key === "c_roi") {
      data = bets.map((d, i) => {
        const allBets = bets
          .slice(0, i)
          .reduce((acc, cur) => [...acc, ...cur], []);
        const profilt = getProfit(allBets);
        const bet_amount = allBets.reduce((acc, b2) => acc + b2.bet_amount, 0);
        return profilt / bet_amount;
      });
    } else if (metric.isAcc) {
      data = data.map((d, i) =>
        data.slice(0, i).reduce((acc, cur) => acc + cur, 0)
      );
    }
    const datasets = [
      {
        label: metric.title,
        borderColor: color,
        data,
      },
    ];

    return datasets;
  }
}
