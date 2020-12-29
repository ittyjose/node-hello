const http = require('http');
const https = require('https');


const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

getweather().then((response)=>{
  let msg=JSON.parse(response).consolidated_weather[0].the_temp
  msg=JSON.stringify(msg)+' C';
  res.end(msg);
});
   
});

function getweather(){
  return new Promise((resolve,reject)=>{
  let msg;
  https.get('https://www.metaweather.com/api/location/44418/', (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      msg=data;
    resolve (msg)
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
})
}
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
