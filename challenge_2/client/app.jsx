import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyView from './CurrencyView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

componentDidMount() {

  } 

render () {
    return (
      <div>
        <CurrencyView />
        <a className="required" href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
