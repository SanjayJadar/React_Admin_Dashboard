 
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ApiData from './ApiData';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  indexAxis: 'y',
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

export default function Performance(){
  const passdata = ApiData();
 
  if(passdata.length===0){
    return <></>
  } 

  const data = {
    labels: Object.keys(passdata.performance),
    datasets: [
      {
        label: '# of Hits',
        data: Object.values(passdata.performance),
        backgroundColor: [
          'rgb(0, 255, 255, 0.8)',   // Aqua
          'rgba(0, 0, 255, 0.8)',    // Blue
          'rgba(0, 128, 0, 0.8)',    // Green
          'rgba(255, 165, 0, 0.8)',  // Orange
          'rgba(128, 0, 128, 0.8)',  // Purple
          'rgba(255, 0, 0, 0.8)',    // Red
          'rgba(255, 255, 0, 0.8)',  // Yellow
        ],
      },
    ],
  };
 
  return <Bar data={data} options={options} />;
};
 


