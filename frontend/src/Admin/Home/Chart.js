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
import fuelcontex from '../../Statemagemant/Fuelstate/Fuelstate';
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
//   responsive: true,
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

const labels = [1,2,3,1,5,6,7];



 function Chart() {
  const { pprice , nprice ,gprice} = useContext(fuelcontex)
   const data = {
  labels,
  datasets: [
    {
      label: 'Total cash ',
      data: [11,2,31,41,15,61,7,],
      borderColor: '#49bad6',
      backgroundColor: '#007095',
      pointBorderColor: 'transparent',
      PointBorderWidth:4,
      color : 'white',
      tension:0.5
    },
   
   
  ],
};
  return <Line options={options} data={data}    className='w-full h-full border-none'/>;
}

export default Chart