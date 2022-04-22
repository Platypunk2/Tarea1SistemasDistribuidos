'use strict';

const express = require('express');
const https = require('https')
const redis = require('redis');
const axios = require('axios')


//const cors = require("cors");
// Constants
const PORT = 8070;
const HOST = '0.0.0.0';
const url = `redis://redis_sv:6379`;
// App
const app = express();
const client = redis.createClient({url});

(async () => {
  // Connect to redis server
  console.log('Conectado')
  await client.connect();
})();

/*client.on('connect', function() {
  console.log('Connected! to Redis');
  client.get('-1', function(err, reply) {
    console.log('Cache?: ',reply); 
  });
}).on('error', function (error) {
  console.log('Erroe:',error);
});*/
function search(item)
{
  
}
//app.use(cors());
app.get('/search', (req, res) => {
  console.log('Entro al Servidor');
  const item = req.query.q;
  console.log('item Enviado: ',item)
  let cache = null;
  (async () => {
    let reply = await client.get(item);
    console.log('Cache?: ',reply); // ReactJS
      if(reply)
      {
        console.log('Esta en Cache');
        cache = JSON.parse(reply)
        res.json(cache);
      }else{
        console.log('No esta en Cache');
        axios.get('http://gr_rpc:8050/items', { params:{name: item}}).then(res2 => {
          //console.log(`statusCode: ${res.status}`)
          console.log('Data:',res2.data);
          let data = JSON.stringify(res2.data)
          client.set(item, data);
          cache = res2.data;
          res.json(cache);
        }).catch(error => {console.error(error)})
        
      }
  })();
});
/*if(item != '-1')
  {*/
    //console.log('Revisando Cache:');
    
    
  //
  /*}else{
    console.log('Revisando Cache:');
    (async () => {
      let reply = await client.get('itemlist');
      console.log('Cache?: ',reply); // ReactJS
        if(reply)
        {
          cache = JSON.parse(reply)
          console.log('Esta en Cache');
          res.send(cache);
        }else{
          console.log('No esta en Cache')
          axios.get('http://gr_rpc:8050/items', { params:{name: null}}).then(res2 => {
            //console.log(`statusCode: ${res.status}`)
            console.log('Data:',res2.data);
            data = JSON.stringify(res2.data)
            client.set('itemlist', data);
            cache = res2.data;
            res.send(cache);
          }).catch(error => {console.error(error)})
        }
    })();
    
  }*/
app.listen(PORT, HOST, () => {
  console.log(`SERVER RUN AT http://localhost:${PORT}`);
});