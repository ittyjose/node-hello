const http = require('http');
const express = require("express");

const https = require('https');



const restService = express();



restService.get("/", function(req, res) {
getweather().then((response)=>{
  let msg=JSON.parse(response).consolidated_weather[0].the_temp
  msg=JSON.stringify(msg)+' C';
  //res.end(msg);
  return res.json({
    speech: msg,
    displayText: msg,
    source: "webhook-echo-sample"
  });
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
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
