import React from "react";
import { Line } from "react-chartjs-2";

const CryptoChart = ({ historicalData }) => {
  const data = {
    labels: historicalData.map((entry) => entry.date),
    datasets: [
      {
        label: "Price Trend",
        data: historicalData.map((entry) => entry.price),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Price: $${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default CryptoChart;
