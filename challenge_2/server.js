let express = require('express');
let path = require('path');
let app = express();

const port = 3007;

app.use(express.static('public'));


app.get('/currencies', () => {


});

app.listen(process.env.PORT || port, function() {
  console.log('listening on port 3007!');
});