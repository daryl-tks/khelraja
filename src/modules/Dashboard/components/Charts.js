import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Amount",
      data: [12, 19, 3, 5, 2, 3, 50],
      backgroundColor: ["rgba(190, 30, 45, 0.8)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      // borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => (
  <>
    <div className="header">
      <h1 className="title">Amount Lend vs Amount</h1>
    </div>

    <Bar data={data} options={options} height={100} />
  </>
);

export default VerticalBar;
