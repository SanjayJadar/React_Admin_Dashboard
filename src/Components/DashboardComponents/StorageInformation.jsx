
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ApiData from './ApiData';

ChartJS.register(ArcElement, Tooltip, Legend);

const StorageInformation = () => {
  const passdata = ApiData();
  if(passdata.length===0){
    return <></>
  }


  //Graph Data Starts
  const data = {
    labels: Object.keys(passdata.storage).reverse(),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(passdata.storage).reverse(),
        backgroundColor: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(0, 255, 255, 0.8)', 
          'rgba(144, 238, 144, 0.8)'
        ],
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
      },
    ],
  };
  //Graph Data Ends 


  return <Pie data={data} />;
}

export default StorageInformation;
