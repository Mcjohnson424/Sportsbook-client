import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import metrics from "./contants/metrics";
import dimensions from "./contants/dimensions";
import groupByDate from "../../../../common/functions/groupByDate";
import MetricInput from "./MetricInput";
import DimensionInput from "./DimensionInput";
import getDatasets from "../../../../common/functions/getDatasets";
import useBetFilteres from "../../../../hooks/useBetFilters";

export default function BetChart({ bets = [] }) {
  const groupedByDate = groupByDate(bets);
  const [dimension, setDimension] = useState(null);
  const [metric, setMetric] = useState(metrics[6]);
  const {
    statuses,
    betTypes,
    betCategories,
    sports,
    betTargets,
    leagues,
    sportbooks,
  } = useBetFilteres();
  const datasets = metric
    ? getDatasets(
        groupedByDate,
        metric,
        dimension,
        statuses,
        betTypes,
        betCategories,
        sports,
        betTargets,
        leagues,
        sportbooks
      )
    : [[]];
  return (
    <>
      <Container>
        <Row>
          <Col>
            <MetricInput
              value={metric ? metric.key : ""}
              onChange={(e) => {
                setMetric(metrics.find((m) => m.key === e.target.value));
              }}
            />
          </Col>
          <Col>
            <DimensionInput
              value={dimension ? dimension.key : ""}
              onChange={(e) => {
                setDimension(dimensions.find((d) => d.key === e.target.value));
              }}
            />
          </Col>
        </Row>
      </Container>
      <div style={{ height: "40vh" }}>
        {" "}
        <Line
          options={{
            legend: {
              display: dimension,
            },
            maintainAspectRatio: false,
          }}
          data={{
            labels: groupedByDate.dates.map((g) => format(g, "M/d/yyyy")),
            datasets: datasets,
          }}
        />
      </div>
    </>
  );
}
