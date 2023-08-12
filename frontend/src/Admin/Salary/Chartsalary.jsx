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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'August', 'September', 'October', 'November', 'December'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:[1,2,3,8,9,10,7,6,4],
      borderColor: 'rgba(197, 138, 95)',
      backgroundColor: 'rgba(197, 138, 95)',
      pointBorderColor: 'transparent',
      PointBorderWidth:4,
      color : 'white',
      tension:0.5
    },
    {
      label: 'Dataset 2',
      data:[1,2,3,4,5,6,12,11,10,],
      borderColor: 'rgba(100, 223, 166)',
      backgroundColor: 'rgba(100, 223, 166)',
      pointBorderColor: 'transparent',
      PointBorderWidth:5,
      color : 'white',
      tension:0.5
    },
    {
      label: 'Dataset 3',
      data:[12,11,10,9,8,7,6,5,4,3,2,1],
      borderColor:'rgba(197, 95, 95)',
      backgroundColor: 'rgba(197, 95, 95)',
      pointBorderColor: 'transparent',
      PointBorderWidth:4,
      color : 'white',
      tension:0.5
    },
  ],
};



const Chartsalary = () => {
  return (
    <div className='w-full'> <Line options={options} data={data} /></div>
  )
}

export default Chartsalary