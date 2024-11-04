import React from 'react'
import {Line, Doughnut} from 'react-chartjs-2'
import {Chart as Chartjs,CategoryScale,Filler,Tooltip,LinearScale,PointElement,LineElement,ArcElement,Legend, plugins, scales} from 'chart.js';
import { blueColor, lightblue, lightpurpil, purpilcolor } from '../../constants/color';
import { getLast7Days } from '../../lib/features';


Chartjs.register(
CategoryScale,
Filler,
Tooltip,
LinearScale,
PointElement,
LineElement,
ArcElement,
Legend
);

const labels =getLast7Days();

const lineChartOptions=  {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

scales: {
  x: {
    grid: {
      display: false,
    },
  },
  y: {
    beginAtZero: true,
    grid: {
      display: false,
    },
  },
},

};


const LineChart = ({value=[]}) => {

    const data= {
        labels,
           datasets: [
          {
          data: value,
          label: "Messages",
          fill: true,
          backgroundColor: lightpurpil,
          borderColor: purpilcolor,
        },
        

      ],
    } 
  return (
    <Line data={data} options={lineChartOptions}/>
  )
}

const DoughnutChartOptions = {
 responsive: true,
 plugins:{
  legend: {
    display: false,
  },
 },
 cutout:120,
};

const DoughnutChart = ({value=[],labels=[]}) => {
  
  const data= {
    labels,
       datasets: [
      {
      data: value,
      backgroundColor: [lightpurpil,blueColor],
      hoverBackgroundColor: [purpilcolor, lightblue],
      borderColor: [purpilcolor, lightblue],
      offset:40,
    },
    

  ],
} 
    return (
      <Doughnut 
      style={{zIndex:10}}
      data={data}
       options={DoughnutChartOptions}/>
    )
  }

export { LineChart, DoughnutChart};
