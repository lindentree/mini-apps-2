import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-resizer';

export default class CurrencySymbolsView extends React.Component {
  constructor(props) {
    super(props);

   
  }


parsePropData() {
    const { coins } = this.props;
    return Object.keys(coins);
}

render() {




}


}
