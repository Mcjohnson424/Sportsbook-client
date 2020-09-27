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

export default function BetChart({ bets = [] }) {
  const groupedByDate = groupByDate(bets);
  const [dimension, setDimension] = useState(dimensions[0]);
  const [metric, setMetric] = useState(metrics[0]);
  const datasets = getDatasets(groupedByDate, metric, dimension);
  console.log(datasets);
  console.log(groupedByDate);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <MetricInput
              value={metric.key}
              onChange={(e) => {
                setMetric(metrics.find((m) => m.key === e.target.value));
              }}
            />
          </Col>
          <Col>
            <DimensionInput
              value={dimension.key}
              onChange={(e) => {
                setDimension(dimensions.find((d) => d.key === e.target.value));
              }}
            />
          </Col>
        </Row>
      </Container>
      <Line
        data={{
          labels: groupedByDate.map((g) =>
            format(parseISO(g[0].date_time), "M/d/yyyy")
          ),
          datasets: datasets,
        }}
      />
    </>
  );
}
