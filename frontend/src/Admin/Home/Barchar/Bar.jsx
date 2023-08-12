import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
    //   display: true,
      text: 'Chart.js Line Chart',
    },
  }, scales:{
    display:false,
    x:{
        grid:{
            display:false
        }
    },
    y:{
        grid:{
            display:false
        }
    }
  }
  
};

const labels = ['price' ];


export function Barchart() {
  const { pprice , nprice ,gprice} = useContext(fuelcontex)
  
 const data = {
  labels,
  datasets: [
    {
      label: 'petrol',
      data: [pprice],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'navato',
      data: [nprice],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'gas',
      data: [gprice],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  return <Bar options={options} data={data} />;
}
