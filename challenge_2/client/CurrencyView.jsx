import React from 'react';
import Chart from '../public/Chart.bundle.js';
import { Line } from 'react-chartjs-2';

let chartOptions = {
  labels: [],
  scales: {
            yAxes: [{
                ticks: {
                    min: 3500,
                    max: 4000,
                    stepSize: 50,
                    showLine: true
                }
            }]
          },
  fill: false
};

export default class CurrencyView extends React.Component {

  constructor(props) {
    super(props);

    this.parsePropData = this.parsePropData.bind(this);
  }



  parsePropData() {
    let closingPrices = Object.keys(this.props.history).map((prices)=>{
                return this.props.history[prices];
              })
    //console.log('parser', closingPrices)

    let chartData = {
      labels: ["Previous 31 Days"],
      datasets: [{
        label: "Bitcoin closing prices",
        borderColor: 'rgb(255, 99, 132)',
        data: closingPrices,
        }]      
    }

    //console.log('chart', chartData)
    return chartData;
  }

  
  render() {

    if (this.props.history === null || this.props.history === undefined) {
      return null;
    } else {
      return (
        <div>
          <div className="currency-view">
            Bitcoin current price: {this.props.prices}
          </div>

          <div className="history">
            <Line
              data={this.parsePropData}
              options={chartOptions}
              height={500}
              width={700}
            />
          </div>
        </div>
      )
    }
    
  }
}