import React from 'react';
import Chart from '../public/Chart.bundle.js';


export default class CurrencyView extends React.Component {

  constructor(props) {
    super(props);
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
            Bitcoin closing prices: {Object.keys(this.props.history).map((prices, index)=> {
              return <div className="closing-price" key={index}> {this.props.history[prices]}</div>
            })}
          </div>
        </div>
      )
    }
    
  }
}