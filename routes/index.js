const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});


router.get('/test', (req, res) => {
  

  const https = require('https');

  https.get('https://iboard-api.ssi.com.vn/statistics/charts/history?resolution=1&symbol=BCM&from=1723775904&to=1726454304', resp => {
    let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //console.log(JSON.parse(data));
      res.send(data);
    });

    
  }).on('error', err => {
    console.log('Error: ', err.message);
    res.send("error");
  });


});

module.exports = router;
