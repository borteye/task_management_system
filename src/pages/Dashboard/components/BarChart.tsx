import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import useScreenWidth from "../../../shared/utils/useScreenWidth";
import { barChartData } from "../../../shared/components/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const width = useScreenWidth();
  const options = {
    responsive: true,
    maintainAspectRatio: width > 639 ? true : false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    resizeDelay: 0,
  };
  return (
    <Bar
      data={barChartData}
      options={options}
      style={{ backgroundColor: "transparent" }}
    />
  );
};

export default BarChart;
