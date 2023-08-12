import React, { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';

ChartJS.register(ArcElement, Tooltip, Legend);
const han = 100 ;
const legends = 200 ;
const legenddd = 300;




const Circlechar = () => {
  const {pprice , nprice ,gprice} = useContext(fuelcontex)

  const data = {
    labels: ['petrol', 'navato', 'gas', ],
    datasets: [
      {
        label: '# of Votes',
        data: [gprice, nprice, pprice,],
        backgroundColor: ['rgba(197, 138, 95)','rgba(100, 223, 166)','pink',
     
        ],
      
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className='w-[70%]'><Doughnut  data={data}/></div>
  )
}

export default Circlechar