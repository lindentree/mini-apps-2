import React from 'react';

export default class CurrencyView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="currency-view">
       Bitcoin current price: {this.props.prices}
     </div>

    )
  }
}