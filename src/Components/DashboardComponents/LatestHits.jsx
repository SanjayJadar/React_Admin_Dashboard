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
import ApiData from './ApiData';

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
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      // text: 'Chart.js Line Chart',
    },
  },
};
 
const LatestHits = () => {   
  const passdata = ApiData();
 
  if(passdata.length===0){
    return <></>
  }
   

  // Graph Data Starts
  const labels = passdata.latestHits.months;

  const data = {
    labels,
    datasets: [
      {
        label: 'Latest Hits',
        data: passdata.latestHits.latest,
        borderColor: 'rgb(66, 245, 227)',
        // backgroundColor: 'rgba(66, 245, 227, 0.5)',
      },
      {
        label: 'Popular Hits',
        data: passdata.latestHits.popular,
        borderColor: 'rgb(207, 14, 14)',
        // backgroundColor: 'rgba(207, 14, 14, 0.5)',
      },
      {
        label: 'Featured',
        data: passdata.latestHits.featured,
        borderColor: 'rgb(136, 14, 207)',
        // backgroundColor: 'rgba(136, 14, 207, 0.5)',
      },
    ],
  };
  // Graph Data Ends
 
  return <Line options={options} data={data}/>;
}
 

export default LatestHits;