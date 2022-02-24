import React, { useEffect, useState } from "react";
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

  console.log("data", data);

  const [date, setDate] = useState([]);
  const [value, setValue] = useState([]);
  let arr = [];
  let arr2 = [];
  useEffect(() => {
    data.map((element, index) => {
      console.log("element : ", element);
      arr[index] = element.date;
      arr2[index] = element.value;
      setDate(arr);
      setValue(arr2);
    });
    console.log("date", date);
    console.log("value", value);
    console.log("arr", arr);
    console.log("arr2", arr2);

    // option.options.xaxis.categories = arr;
    option.series[0].data = arr2;
    console.log("option.series[0].data: ", option.series[0].data);

    option.options.xaxis.categories = arr;
    console.log(
      "option.options.xaxis.categories : ",
      option.options.xaxis.categories
    );
  }, []);

  const [option, setOption] = useState({
    series: [
      {
        // name: "Current Month",
        data: [],
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

      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: [],
      },
    },
  });
  // console.log("option : ", option);
  console.log(
    "option.options.xaxis.categories : ",
    option.options.xaxis.categories
  );
  // console.log("option.series : ", option.series);

  const style = {
    chart: {
      // maxWidth: "50rem",
      margin: "35px auto",
      width: "50rem",
    },
  };
  return (
    <>
      <h1>dd</h1>
      <div id="chart">
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
