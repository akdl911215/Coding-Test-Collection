import React, { useState } from "react";
import Chart from "react-apexcharts";

const SplineChart = () => {
  const [data, setData] = useState([
    { date: "2019-03-01", value: 32 },
    { date: "2019-03-02", value: 48 },
    { date: "2019-03-03", value: 46 },
    { date: "2019-03-04", value: 41 },
    { date: "2019-03-05", value: 36 },
    { date: "2019-03-06", value: 49 },
    { date: "2019-03-07", value: 45 },
    { date: "2019-03-08", value: 23 },
    { date: "2019-03-09", value: 25 },
    { date: "2019-03-10", value: 27 },
    { date: "2019-03-11", value: 47 },
    { date: "2019-03-12", value: 23 },
    { date: "2019-03-13", value: 42 },
    { date: "2019-03-14", value: 47 },
    { date: "2019-03-15", value: 29 },
    { date: "2019-03-16", value: 20 },
    { date: "2019-03-17", value: 20 },
    { date: "2019-03-18", value: 40 },
    { date: "2019-03-19", value: 25 },
    { date: "2019-03-20", value: 20 },
    { date: "2019-03-21", value: 42 },
    { date: "2019-03-22", value: 29 },
    { date: "2019-03-23", value: 36 },
    { date: "2019-03-24", value: 38 },
    { date: "2019-03-25", value: 37 },
    { date: "2019-03-26", value: 37 },
    { date: "2019-03-27", value: 42 },
    { date: "2019-03-28", value: 29 },
    { date: "2019-03-29", value: 42 },
    { date: "2019-03-30", value: 29 },
    { date: "2019-03-31", value: 30 },
  ]);

  const [option, setOption] = useState({
    series: [
      {
        data: data.map((data) => {
          return data.value;
        }),
      },
    ],
    options: {
      chart: {
        height: 280,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((data) => {
          return data.date;
        }),
      },
    },
  });

  const style = {
    chart: {
      width: "50%",
      height: "60%",
      margin: "0 auto",
    },
    div: {
      textAlign: "center",
    },
  };
  return (
    <>
      <div style={style.div}>
        <Chart
          type="area"
          options={option.options}
          series={option.series}
          style={style.chart}
        />
      </div>
    </>
  );
};

export default SplineChart;
