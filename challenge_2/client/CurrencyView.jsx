import React from 'react';
import Chart from '../public/Chart.bundle.js';
import { Line } from 'react-chartjs-2';

let chartOptions = {
  labels: [],
  scales: {
            yAxes: [{
                ticks: {
                    min: 3000,
                    max: 5000,
                    stepSize: 100,
                    showLine: false
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
    let pastIntervals = Object.keys(this.props.history);
    let closingPrices = Object.keys(this.props.history).map((prices)=>{
                return this.props.history[prices];
              })
   

    let chartData = {
      labels: pastIntervals,
      datasets: [{
        label: "Bitcoin closing prices",
        borderColor: 'rgb(255, 99, 132)',
        lineTension: 0,
        data: closingPrices,
        }]      
    }
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
              height={200}
              width={400}
            />
          </div>
        </div>
      )
    }
    
  }
}