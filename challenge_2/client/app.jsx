import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyView from './CurrencyView.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: null,
      history: null
    };

  }

  componentDidMount() {
    axios.get('/currencies', (res) => {
      console.log(res)
    })
    .then((data) => {
      let prices = data.data;
      this.setState({prices});
    })
    .catch(error => {
      console.log(error)
    });

    axios.get('/history', (res) => {
      console.log(res)
    })
    .then((data) => {
      let history = data.data;
      this.setState({history});
    })
    .catch(error => {
      console.log(error)
    });

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
