import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({value}) => {
  const options = {
    responsive: !0,
    plugins: {
      legend: {
        display: !1,
        position: "bottom",
      },
      title: {
        display: !1,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const dataOne = value.One;
  const dataTwo = value.Two;

  const data = {
    labels,
    datasets: [
      {
        label: `Income`,
        data: labels.map((x, i) => dataOne[i]),
        backgroundColor: "rgba(56, 189, 248, 0.5)",
        borderColor: "rgba(56, 189, 248, 1)",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: `Expenses`,
        data: labels.map((x, i) => dataTwo[i]),
        backgroundColor: "rgba(225, 29, 72, 0.5)",
        borderColor: "rgba(225, 29, 72, 1)",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChart;
