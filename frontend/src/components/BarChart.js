import React from "react";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const BarChart = ({ filteredData }) => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  const labels = ["A", "B", "C", "D", "E", "F"].reverse();

  const fetchedData = [];

  const data = {
    labels,
    datasets: [
      {
        label: "Titles",
        // data: labels.map((item) => item ),
        data: filteredData.map((data) => {
          return data.A / 4;
        }),
        borderColor: "blue",
        backgroundColor: "blue",
      },

      // {
      //   label: 'Gender',
      //   // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   data: ["Male", "Female"],
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />;
    </>
  );
};

export default BarChart;
