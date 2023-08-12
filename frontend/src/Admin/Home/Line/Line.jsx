import React, { useContext } from 'react';
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
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ['lastDate'];

 



const Lines = () => {
  const { pprice , nprice ,gprice} = useContext(fuelcontex)
  const data = {
    labels,
    datasets: [
      {
        label: 'petrol 1',
        data:[pprice],
        borderColor: 'rgba(197, 138, 95)',
        backgroundColor: 'rgba(197, 138, 95)',
        pointBorderColor: 'transparent',
        PointBorderWidth:4,
        color : 'white',
        tension:0.5
      },
      {
        label: 'navato ',
        data:[nprice],
        borderColor: 'rgba(100, 223, 166)',
        backgroundColor: 'rgba(100, 223, 166)',
        pointBorderColor: 'transparent',
        PointBorderWidth:5,
        color : 'white',
        tension:0.5
      },
      {
        label: 'gas',
        data:[gprice],
        borderColor:'rgba(197, 95, 95)',
        backgroundColor: 'rgba(197, 95, 95)',
        pointBorderColor: 'transparent',
        PointBorderWidth:4,
        color : 'white',
        tension:0.5
      },
    ],
  };
  return (
    <div className='w-full'> <Line options={options} data={data} /></div>
  )
}

export default Lines