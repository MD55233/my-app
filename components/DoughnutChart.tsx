"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } 
from 'chart.js';
import { truncate } from 'fs';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define the props type
interface DoughnutChartProps {
  accounts: any[]; // Adjust type as needed
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  // Corrected data object
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500], // Example data
        backgroundColor: ['#0747b6',  '#2f91fa'], // Example colors
      },
    ],
    labels: ['Product Selling Profit', 'Member Adding Profit'], // Example labels
  };

  return <Doughnut 
  data={data} 
  options ={{
    cutout: '60%',
    plugins: {
      legend: {
        display: true
      }
    }
  }}
  />;
};

export default DoughnutChart;
