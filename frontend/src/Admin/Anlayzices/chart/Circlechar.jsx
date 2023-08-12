import React, { useContext } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import fuelcontex from '../../../Statemagemant/Fuelstate/Fuelstate';

ChartJS.register(ArcElement, Tooltip, Legend);
const han = 100 ;
const legends = 200 ;
const legenddd = 300;




const Circlechar = () => {
  const {pprice , nprice ,gprice, Navtoquentity, navtoquentitycus , Gasquentity,Gastoquentitycus ,  petrolquentity,petrolquentitycus} = useContext(fuelcontex)
  const totalgasbuy = [Navtoquentity +navtoquentitycus , Gasquentity +Gastoquentitycus ,  petrolquentity +petrolquentitycus];

  const data = {
    labels: [ 'navato', 'gas', 'petrol'],
    datasets: [
      {
        label: '# of Votes',
        data: [Navtoquentity + navtoquentitycus ,Gasquentity +Gastoquentitycus ,  petrolquentity +petrolquentitycus],
        backgroundColor: ['#169c93' ,'#66e5a599' ,'#e5668c99'
        ],
      
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className='w-full'><Doughnut  data={data}/></div>
  )
}

export default Circlechar