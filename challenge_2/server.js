let express = require('express');
let path = require('path');

let axios = require('axios');

let app = express();
const port = 3007;

app.use(express.static('public'));


app.get('/currencies', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
  .then((data) => {
    //console.log('init', data.data);
    let curPrice = data.data.bpi.BTC.rate;
    res.send(curPrice);
  })
  .catch(error => {
    console.log(error)
  });

});


app.get('/history', (req, res) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?currency=BTC')
  .then((data) => {
    console.log('init', data.data);
    let curPrice = data.data.bpi.BTC.rate;
    res.send(curPrice);
  })
  .catch(error => {
    console.log(error)
  });

});

app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3007!');
});