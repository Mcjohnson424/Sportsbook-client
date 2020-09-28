import getRandomColor from "./getRandomColor";

export default function (bets, metric, dimension) {
  const allBets = bets.reduce((acc, cur) => [...acc, ...cur], []);
  if (dimension && allBets.some((b) => b[dimension.key])) {
    const dimensions = [];
    allBets.forEach((bet) => {
      const d = dimensions.find((di) => di === bet[dimension.key]);
      if (!d && bet[dimension.key]) {
        dimensions.push(bet[dimension.key]);
      }
    });
    return dimensions.map((d) => {
      const color = getRandomColor();
      const data = bets.map((group) =>
        metric.parse(group.filter((bet) => bet[dimension.key] === d))
      );
      const b = bets.map((group) =>
        group.filter((bet) => bet[dimension.key] === d)
      )[0];
      return {
        label: b[0][dimension.name_key],
        borderColor: color,
        data: data,
      };
    });
  } else {
    const color = getRandomColor();
    return [
      {
        label: "Bets",
        borderColor: color,
        data: bets.map((group) => metric.parse(group)),
      },
    ];
  }
}
