const http = require('http');
//const axios = require('axios');


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let msg = 'Hello Node!\n'
  https.get('https://www.metaweather.com/api/location/44418/', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    msg=JSON.parse(data).explanation);
      res.end(msg);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
  //axios.get('https://www.metaweather.com/api/location/44418/')
  //.then(response => {
  // msg = msg+ response;
   
 // })
 // .catch(error => {
 //   console.log(error);
 // });

  
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
