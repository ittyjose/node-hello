const http = require('http');
//const axios = require('axios');


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let msg = 'Hello Node!\n'
  //axios.get('https://www.metaweather.com/api/location/44418/')
  //.then(response => {
  // msg = msg+ response;
   
 // })
 // .catch(error => {
 //   console.log(error);
 // });
  res.end(msg);
  
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
