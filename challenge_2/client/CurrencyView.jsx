import React from 'react';
import Chart from '../public/Chart.bundle.js';


export default class CurrencyView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div className="currency-view">
        Bitcoin current price: {this.props.prices}
      </div>

      <div className="history">
        Bitcoin current price: {this.props.prices}
      </div>
    </div>
    )
  }
}