const http = require('http');
//const axios = require('axios');


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  let msg = 'Hello Node!\n'
  http.get('http://www.metaweather.com/api/location/44418/', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    msg=JSON.parse(data));
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

    res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
