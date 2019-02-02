import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyView from './CurrencyView.jsx';
import CurrencySymbolsView from './CurrencySymbolsView,jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: null,
      history: null,
      coins: null,
      isToggleOn: false
    };

  }

  componentDidMount() {
    axios.get('/currencies')
    .then((data) => {
      let prices = data.data;
      this.setState({prices});
    })
    .catch(error => {
      console.log(error)
    });

    axios.get('/history')
    .then((data) => {
      let history = data.data;
      this.setState({history});
    })
    .catch(error => {
      console.log(error)
    });

    axios.get('/coins')
    .then((data) => {
      let coins = data.data;
      this.setState({coins});
    })

  } 

  render () {
    return (
      <div>
        <CurrencyView prices={this.state.prices} history={this.state.history}/>
        <a className="required" href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a>
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
