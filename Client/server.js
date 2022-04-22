'use strict';

const express = require('express');
const https = require('https')
const axios = require('axios')


//const cors = require("cors");
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Tarea 1 Sistemas Distribuidos');
});
let data = {};
app.get('/inventory/search', (req, res) => {
  const item = req.query.q;
  console.log('query item: ',item)
  if(item)
  {
    console.log('Existe Item');
    (async () => {
      await axios.get('http://server:8070/search', { params: {  q: item}}).then(res2 => {
      console.log(`statusCode: ${res2.status}`)
      //console.log(res)
      data = res2.data;
      res.json(data);
    }).catch(error => {console.error(error)})
    })();
    
  }else{
    res.json({});
  }/*else{
    console.log('No Existe Item');
    axios.get('http://server:8070/search', { params: {  q: '-1'}}).then(res => {
      console.log(`statusCode: ${res.status}`)
      //console.log(res)
      data = res.data;
      res.send(data);
    }).catch(error => {console.error(error)})
  }*/
    
  });


  app.listen(PORT, HOST, () => {
    console.log(`CLIENT RUN AT http://localhost:${PORT}`);
  });