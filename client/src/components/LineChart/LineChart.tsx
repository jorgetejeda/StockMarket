import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineChartProps = {
  timestamps: number[];
  volumens: number[];
}

const LineChart: React.FC<LineChartProps> = ({timestamps, volumens}) => {
  const options = {
    type: 'line',
    backgroundColor: "black",
    borderColor: "#5AC53B",
    borderWidth: 2,
    pointBorderColor: 'rgba(0, 0, 0, 0)',
    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
    pointHoverBackgroundColor: '#5AC53B',
    pointHoverBorderColor: '#000000',
    pointHoverBorderWidth: 4,
    pointHoverRadius: 6,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }
  const datasets = {
    labels: timestamps?.map(timestamp => new Date(timestamp * 1000).toLocaleDateString()),
    datasets: [
      {
        id: 1,
        data: volumens,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  }
  return (
    <Line options={options} data={datasets} />
  )
}

export default LineChart